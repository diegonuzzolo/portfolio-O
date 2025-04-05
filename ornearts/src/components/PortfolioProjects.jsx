import { useEffect, useState } from 'react';

const PortfolioProjects = ({ portfolioId }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Chiamata API al backend per ottenere i progetti
    fetch(`/portfolio/${portfolioId}/projects`)
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Errore:', error));
  }, [portfolioId]);

  return (
    <div>
      <h2>Progetti del Portfolio</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioProjects;
