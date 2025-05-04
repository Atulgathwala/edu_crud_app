import React, { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../../utility/Spinner";
import axios from "axios";

const CreateCourses = () => {
  const initialCourseState = {
    courseTitle: "",
    courseThumbnail: "",
    courseDuration: "",
    courseTrainer: "",
    courseDescription: "",
  };

  const initialVideoState = {
    videoTitle: "",
    videoFile: "",
  };

  const [courseState, setCourseState] = useState(initialCourseState);
  const [videosState, setVideosState] = useState([initialVideoState]);
  const [isLoading, setIsLoading] = useState(false);
  const [courseThumbnailFile, setCourseThumbnailFile] = useState(null);

  const handleCourseThumbnail = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!["image/jpeg", "image/png"].includes(file.type)) {
      toast.error("Only JPEG/PNG course thumbnails are allowed");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Thumbnail must be under 2MB");
      return;
    }
    setCourseThumbnailFile(file);
  };

  const handleCourseInputChange = (e) => {
    const { name, value } = e.target;
    setCourseState({ ...courseState, [name]: value });
  };

  const addVideoSection = () => {
    setVideosState([...videosState, { ...initialVideoState }]);
  };

  const removeVideoSection = (index) => {
    if (index > 0) {
      setVideosState(videosState.filter((_, i) => i !== index));
    }
  };

  const handleVideoInputChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...videosState];
    updated[index][name] = value;
    setVideosState(updated);
  };

  const handleVideoUpload = (index, e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("video/")) {
      toast.error("Only video files are allowed");
      return;
    }
    if (file.size > 100 * 1024 * 1024) {
      toast.error("Video must be under 100MB");
      return;
    }

    const updated = [...videosState];
    updated[index]["videoFile"] = file;
    setVideosState(updated);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      // Upload course thumbnail
      const courseFormData = new FormData();
      courseFormData.append("file", courseThumbnailFile);
      courseFormData.append("upload_preset", "crud_app_new");
      courseFormData.append("cloud_name", "dasa3kzyf");

      const courseRes = await fetch(
        "https://api.cloudinary.com/v1_1/dasa3kzyf/image/upload",
        { method: "POST", body: courseFormData }
      );
      const courseThumbnailUrl = await courseRes.json();

      // Upload video files
      const videosWithCloudinary = await Promise.all(
        videosState.map(async (video) => {
          const videoData = new FormData();
          videoData.append("file", video.videoFile);
          videoData.append("upload_preset", "crud_app_new");

          const videoRes = await fetch(
            "https://api.cloudinary.com/v1_1/dasa3kzyf/video/upload",
            { method: "POST", body: videoData }
          );
          const videoUrl = await videoRes.json();

          return {
            videoTitle: video.videoTitle,
            videoUrl: videoUrl.secure_url,
          };
        })
      );

      // Save course with uploaded video URLs
      const payload = {
        ...courseState,
        courseThumbnail: courseThumbnailUrl.secure_url,
        videos: videosWithCloudinary,
      };

      let { data } = axios.post("http://localhost:5200/courses-data", payload);
      toast.success("Course Created Successfully");

      setCourseState(initialCourseState);
      setVideosState([initialVideoState]);
      setCourseThumbnailFile(null);
    } catch (err) {
      toast.error(err.message || "Something went wrong");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full flex justify-center p-4">
      <article className="w-full max-w-4xl bg-white shadow-2xl rounded-md mt-6 p-6 text-white">
        <h1 className="text-2xl font-bold text-primary-color text-center mb-4">
          Create Course
        </h1>
        <hr className="border-b border-[#727770] my-5" />
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-wrap justify-between text-black"
        >
          <div className="mb-4 w-[48%]">
            <label className="font-semibold">Course Title</label>
            <input
              name="courseTitle"
              value={courseState.courseTitle}
              onChange={handleCourseInputChange}
              className="w-full p-2 rounded text-black border"
              required
            />
          </div>
          <div className="mb-4 w-[48%]">
            <label className="font-semibold">Course Thumbnail</label>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleCourseThumbnail}
              className="w-full p-2 rounded text-black border file:bg-[red] file:px-2 file:py-1 file:rounded-md file:text-white"
              required
            />
          </div>
          <div className="mb-4 w-[48%]">
            <label className="font-semibold">Duration</label>
            <input
              name="courseDuration"
              value={courseState.courseDuration}
              onChange={handleCourseInputChange}
              className="w-full p-2 rounded text-black border"
              required
            />
          </div>
          <div className="mb-4 w-[48%]">
            <label className="font-semibold">Trainer</label>
            <input
              name="courseTrainer"
              value={courseState.courseTrainer}
              onChange={handleCourseInputChange}
              className="w-full p-2 rounded text-black border"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label className="font-semibold">Description</label>
            <textarea
              name="courseDescription"
              value={courseState.courseDescription}
              onChange={handleCourseInputChange}
              className="w-full p-2 rounded text-black border"
              required
            />
          </div>

          <h1 className="text-primary-color font-semibold text-xl my-4">
            Video section
          </h1>

          {videosState.map((video, idx) => (
            <div
              key={idx}
              className="bg-primary-color shadow-xl p-4 rounded mb-4 w-full"
            >
              <h2 className="font-semibold mb-2 text-primary-color">
                Video {idx + 1}
              </h2>
              <section className="flex justify-between">
                <div className="w-[48%]">
                  <label className="font-semibold">Video title</label>
                  <input
                    placeholder="Video Title"
                    name="videoTitle"
                    value={video.videoTitle}
                    onChange={(e) => handleVideoInputChange(idx, e)}
                    className="w-full p-2 mb-2 rounded text-black border"
                    required
                  />
                </div>
                <div className="w-[48%]">
                  <label className="font-semibold">Upload Video File</label>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => handleVideoUpload(idx, e)}
                    className="w-full p-2 mb-2 rounded text-black border"
                    required
                  />
                </div>
              </section>
              {videosState.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeVideoSection(idx)}
                  className="text-red-400 underline text-sm"
                >
                  Remove Video
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={addVideoSection}
            className="bg-green-600 hover:bg-green-700 w-full py-2 rounded mb-4"
          >
            Add Another Video
          </button>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded text-white cursor-pointer"
          >
            {isLoading ? "Creating..." : "Submit Course"}
          </button>
        </form>
      </article>
      {isLoading && <Spinner />}
    </section>
  );
};

export default CreateCourses;
