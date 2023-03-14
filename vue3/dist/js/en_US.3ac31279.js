import { o as l } from "./_commonjsHelpers.2f3e7994.js";
import "./_commonjs-dynamic-modules.42bbacb3.js";
var i,
  d,
  n = {};
(i = {
  get exports() {
    return n;
  },
  set exports(t) {
    n = t;
  },
}),
  (d = (function (t, r) {
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.default = {
        _decimalSeparator: ".",
        _thousandSeparator: ",",
        _percentPrefix: null,
        _percentSuffix: "%",
        _date_millisecond: "mm::ss SSS",
        _date_second: "hh:mm:ss a",
        _date_minute: "hh:mm a",
        _date_hour: "hh:mm a",
        _date_day: "MMM dd",
        _date_week: "ww",
        _date_month: "MMM",
        _date_year: "yyyy",
        _duration_millisecond: "SSS",
        _duration_second: "ss",
        _duration_minute: "mm",
        _duration_hour: "hh",
        _duration_day: "dd",
        _duration_week: "ww",
        _duration_month: "MM",
        _duration_year: "yyyy",
        _era_ad: "AD",
        _era_bc: "BC",
        A: "",
        P: "",
        AM: "",
        PM: "",
        "A.M.": "",
        "P.M.": "",
        January: "",
        February: "",
        March: "",
        April: "",
        May: "",
        June: "",
        July: "",
        August: "",
        September: "",
        October: "",
        November: "",
        December: "",
        Jan: "",
        Feb: "",
        Mar: "",
        Apr: "",
        "May(short)": "May",
        Jun: "",
        Jul: "",
        Aug: "",
        Sep: "",
        Oct: "",
        Nov: "",
        Dec: "",
        Sunday: "",
        Monday: "",
        Tuesday: "",
        Wednesday: "",
        Thursday: "",
        Friday: "",
        Saturday: "",
        Sun: "",
        Mon: "",
        Tue: "",
        Wed: "",
        Thu: "",
        Fri: "",
        Sat: "",
        _dateOrd: function (o) {
          var e = "th";
          if (o < 11 || o > 13)
            switch (o % 10) {
              case 1:
                e = "st";
                break;
              case 2:
                e = "nd";
                break;
              case 3:
                e = "rd";
            }
          return e;
        },
        Play: "",
        Stop: "",
        "Zoom Out": "",
        Legend: "",
        "Click, tap or press ENTER to toggle": "",
        Loading: "",
        Home: "",
        Chart: "",
        "Serial chart": "",
        "X/Y chart": "",
        "Pie chart": "",
        "Gauge chart": "",
        "Radar chart": "",
        "Sankey diagram": "",
        "Chord diagram": "",
        "Flow diagram": "",
        "TreeMap chart": "",
        Series: "",
        "Candlestick Series": "",
        "Column Series": "",
        "Line Series": "",
        "Pie Slice Series": "",
        "X/Y Series": "",
        Map: "",
        "Press ENTER to zoom in": "",
        "Press ENTER to zoom out": "",
        "Use arrow keys to zoom in and out": "",
        "Use plus and minus keys on your keyboard to zoom in and out": "",
        Export: "",
        Image: "",
        Data: "",
        Print: "",
        "Click, tap or press ENTER to open": "",
        "Click, tap or press ENTER to print.": "",
        "Click, tap or press ENTER to export as %1.": "",
        'To save the image, right-click this link and choose "Save picture as..."':
          "",
        'To save the image, right-click thumbnail on the left and choose "Save picture as..."':
          "",
        "(Press ESC to close this message)": "",
        "Image Export Complete": "",
        "Export operation took longer than expected. Something might have gone wrong.":
          "",
        "Saved from": "",
        PNG: "",
        JPG: "",
        GIF: "",
        SVG: "",
        PDF: "",
        JSON: "",
        CSV: "",
        XLSX: "",
        "Use TAB to select grip buttons or left and right arrows to change selection":
          "",
        "Use left and right arrows to move selection": "",
        "Use left and right arrows to move left selection": "",
        "Use left and right arrows to move right selection": "",
        "Use TAB select grip buttons or up and down arrows to change selection":
          "",
        "Use up and down arrows to move selection": "",
        "Use up and down arrows to move lower selection": "",
        "Use up and down arrows to move upper selection": "",
        "From %1 to %2": "",
        "From %1": "",
        "To %1": "",
        "No parser available for file: %1": "",
        "Error parsing file: %1": "",
        "Unable to load file: %1": "",
        "Invalid date": "",
      });
  })(0, n)) !== void 0 && (i.exports = d);
const p = (function (t, r) {
  for (var o = 0; o < r.length; o++) {
    const e = r[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const a in e)
        if (a !== "default" && !(a in t)) {
          const s = Object.getOwnPropertyDescriptor(e, a);
          s &&
            Object.defineProperty(
              t,
              a,
              s.get ? s : { enumerable: !0, get: () => e[a] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" })
  );
})({ __proto__: null, default: l(n) }, [n]);
export { p as e };
