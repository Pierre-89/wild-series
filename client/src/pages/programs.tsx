import { useEffect, useState } from "react";
import "./programs.css";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((data) => setPrograms(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Liste des séries</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id} className="program">
            <p>{program.title}</p>
            <img src={program.poster} alt={program.title} />
            <p>{program.synopsis}</p>

            <p>
              {program.country}, {program.year}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Programs;
