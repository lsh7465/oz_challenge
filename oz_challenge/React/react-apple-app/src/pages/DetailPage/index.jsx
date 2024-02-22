import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import { imageBasePath } from "../../constant";
import "./DetailPage.css";

const DetailPage = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/movie/${movieId}`);
      setMovies(response.data);
    }
    fetchData();
  }, [movieId]);

  if (!movies) return null;

  return (
    <section className="detail_wrapper">
      <div className="detail">
        <div className="detail-imgbox">
          <img
            className="detail_img"
            src={`${imageBasePath}/${movies.backdrop_path}
      `}
            alt="detail"
          />
        </div>
        <div className="detail--fadeBottom"></div>
      </div>
      <div className="detail-introduction">
        <h1 className="detail-title">{movies.title}</h1>
        <div className="detail-tagline">{movies.tagline}</div>
        <div className="detail-release_date">
          <span className="text">개봉일</span>
          {movies.release_date}
        </div>
        <div className="detail-runtime">
          <span className="text">상영시간</span>
          {movies.runtime}분
        </div>
        <p className="detail-overview">{movies.overview}</p>
        <p className="detail-vote_avg">
          <span className="text">평점</span>
          {movies.vote_average}
        </p>
        <p className="detail-vote_count">
          {/* <span className="text">추천</span> */}
          {movies.vote_count}명이 추천했어요
        </p>

        <div className="tag">
          {movies.genres.map((tag) => {
            return (
              <div key={tag.id}>
                <div>#{tag.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
