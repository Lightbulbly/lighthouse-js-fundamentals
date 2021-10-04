let x = 60;
while (x >= 0) {
  if (x === 50) {
    console.log("Orbiter transfers from ground to internal power")
  } else if (x === 31) {
    console.log("Ground launch sequencer is go for auto sequence start")
  } else if (x === 16) { console.log("Activate launch pad sound suppression system") }
  else if (x === 10) { console.log("Activate main engine hydrogen burnoff system") }
  else if (x === 6) { console.log("Main engine start") }
  else if (x === 0) { console.log("Solid rocket booster ignition and liftoff!") }

  else { console.log("T-" + x + " seconds"); }

  x = x - 1;

}

// let x = 60;
// while (x >= 0) {
//   if ((x !== 0) && (x !== 6) && (x !== 10) && (x !== 31) && (x !== 50)) {
//     console.log("T-" + x + " seconds");
//   } else switch (x) {
//     case 50:
//       console.log("Orbiter transfers from ground to internal power")
//       break;
//     case 31:
//       console.log("Ground launch sequencer is go for auto sequence start")
//       break;

//     case 16:
//       console.log("Activate launch pad sound suppression system")
//       break;

//     case 10:
//       console.log("Activate main engine hydrogen burnoff system")
//       break;

//     case 6:
//       console.log("Main engine start")
//       break;

//     case 0:
//       console.log("Solid rocket booster ignition and liftoff!")
//       break;


//   }
//   x=x-1;
// }