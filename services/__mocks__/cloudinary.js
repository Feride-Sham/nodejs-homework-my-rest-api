module.exports = {
  v2: {
    config: () => {},
    uploader: {
      upload: (a, b, cb) => {
        cb(null, { public_id: "1324864984", secure_url: "secure_url" });
      },
    },
  },
};
