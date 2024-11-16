const { Agenda } = require("@hokify/agenda");
const { sendMAil } = require("./nodemailer");

const { DBURL } = process.env;
const agenda = new Agenda({ db: { address: DBURL } }); // configuring agenda

(async function () {
    await agenda.start(); // starting agenda

    //Define email job
    agenda.define("sent email after an hour", async (job) => {
        await sendMAil(job.attrs.data);
    })
})();


module.exports = { agenda }
