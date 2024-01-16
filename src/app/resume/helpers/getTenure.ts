import { ResumeData, Tenures } from "@/common/types";
import moment from "moment";

export const getTenure = (resume: ResumeData): Tenures =>
  resume.experience.reduce((obj: Tenures, item) => {
    const startDate = moment(item.joining_date, "DD-MM-YYYY");
    const exitDate = item.exit_date
      ? moment(item.exit_date, "DD-MM-YYYY")
      : moment();
    const duration_oject = {
      years: moment.duration(exitDate.diff(startDate)).years(),
      months: moment.duration(exitDate.diff(startDate)).months(),
    };

    let duration = "";
    if (duration_oject.years > 0) {
      duration += `${duration_oject.years} ${
        duration_oject.years > 1 ? "yrs" : "yr"
      } `;
    }
    if (duration_oject.months > 0) {
      const monhDuration = `${duration_oject.months} ${
        duration_oject.months > 1 ? "mos" : "mo"
      }`;

      if (duration_oject.years > 1) {
        duration += `, ${monhDuration}`;
      } else {
        duration += monhDuration;
      }
    } else {
      if (duration_oject.years === 0) {
        duration = "1 mo";
      }
    }

    obj[item.company] = {
      start: startDate.format("MMM YYYY"),
      end: item.exit_date ? exitDate.format("MMM YYYY") : "Present",
      duration: duration.trim(),
    };
    return obj;
  }, {});
