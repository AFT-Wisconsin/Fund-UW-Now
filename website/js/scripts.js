/*!
 * Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
 */

const years = [
  2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016,
  2017, 2018,
];
const gpr = [
  8871, 8445, 8592, 8829, 8875, 8323, 8318, 6888, 7664, 7741, 7820, 6914, 6991,
  7046, 7170,
];

const tuition = [
  7211, 7326, 7477, 7351, 7317, 7678, 7842, 8315, 8624, 8867, 8954, 9348,
];

const tuitionChart = new Chart("tuition", {
  type: "line",
  data: {
    labels: years,
    datasets: [
      {
        label:
          "State funding (General Purpose Revenue dollars) per FTE student",
        borderColor: "black",
        data: gpr,
        fill: false,
      },
      {
        label: "Tuition per FTE student",
        borderColor: "red",
        data: tuition,
        fill: false,
      },
    ],
  },
});
