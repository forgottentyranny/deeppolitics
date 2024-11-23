class Tensor {
  constructor(params) {
    if (isArray(params)) {
      if (params.hasOwnProperty("rank")) {
        this.rank = params.rank;
      }
      else {
        throw "Rank not provided with the parameters in Tensor constructor.";
      }
      if (params.hasOwnProperty("size")) {
        this.size = params.size;
      }
      if (params.hasOwnProperty("data")) {
        this.data = params.data;
      }
    }
    else {
      throw "Parameters were not entered in an array in Tensor constructor.";
    }
  }
};
