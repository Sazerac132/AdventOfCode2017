module.exports = function() {
  let echo, golf = 0, hotel = 0, bravo = 106700;
  const charlie = 123700;

  do {
    let foxtrot = false;
    let delta = 2;

    do {
      echo = 2;

      do {
        if ((delta * echo) === bravo) {
          foxtrot = true;
          break;
        }
      } while (++echo !== bravo);

      if (foxtrot) break;
    } while (++delta !== bravo);

    if (foxtrot) {
      console.log(`'hotel' was incremented: ${++hotel}`);
    }

    if (bravo === charlie) {
      console.log({
        bravo, charlie, delta, echo, foxtrot, golf, hotel
      });
      break;
    }

    bravo += 17;
  } while (true);

};