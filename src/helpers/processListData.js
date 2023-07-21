const processListData = (data) => {
    const result = [];
    for (const id in data) {
      result.push({id: id, ...data[id]});
    }

    // result.sort((a, b) => {
    //   const orderNameA = a.orderName.toLowerCase(); 
    //   const orderNameB = b.orderName.toLowerCase(); 
    //   if (orderNameA < orderNameB) {
    //     return -1;
    //   }
    //   if (orderNameA > orderNameB) {
    //     return 1;
    //   }

    //   return 0;
    // })

    return result;
  }

  export default processListData;