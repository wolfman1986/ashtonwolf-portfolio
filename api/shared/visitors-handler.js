let count = 0;

module.exports = async function (context, req) {
  count += 1;

  context.res = {
    headers: { "Content-Type": "application/json" },
    body: { count }
  };
};

