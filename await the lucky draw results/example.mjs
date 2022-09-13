function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }


  const getResults = async () => {

    try {
     const tinaAwaiter = await luckyDraw("tina");
     const tinaRes = await tinaAwaiter;
     console.log(tinaRes);
    } catch (error) {
     console.log(error);
    }
   
    try {
     const jorgeAwaiter = await luckyDraw("jorge");
     const jorgeRes = await jorgeAwaiter;
     console.log(jorgeRes);
    } catch (error) {
     console.log(error);
    }
   
    try {
     const julienAwaiter = await luckyDraw("julien");
     const julienRes = await julienAwaiter;
     console.log(julienRes);
    } catch (error) {
     console.log(error);
    }
    
   };
   
   getResults();
