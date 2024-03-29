import routes from "../routes";

export const home = (req, res) =>
  res.render("Home", {
    pageTitle: "Home",
    videos
  });

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("Search", {
    pageTitle: "Search",
    searchingBy,
    videos
  });
};

export const getUpload = (req, res) =>
  res.render("Upload", {
    pageTitle: "Upload"
  });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  // Tp Dd : Upload and save video
  res.redirect(routes.videoDetail(324393));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", {
    pageTitle: "Video Detail"
  });
export const editVideo = (req, res) =>
  res.render("editVideo", {
    pageTitle: "Edit Video"
  });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", {
    pageTitle: "Delete Video"
  });
