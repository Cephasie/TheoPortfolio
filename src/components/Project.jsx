import React, {
  memo,
  Suspense,
} from 'react';

const portfolioProjects = [
  {
    id: 1,
    title: 'HEALTHCARE ANALYTICS WITH MICROSOFT EXCEL',
    description: 'Exploratory data analysis on a 10,000-record synthetic healthcare dataset was conducted using Microsoft Excel. Data cleaning, analysis, and visualization focused on metrics such as patient counts by gender, medical conditions, and billing amounts by insurance providers. A dashboard was created to effectively present these insights.',
    imageUrl: 'https://res.cloudinary.com/dtqrzl86y/image/upload/v1726647801/Personal%20Gigs/health_wltzhc.jpg',
    projectLink: 'https://dev.to/theophilus1320/health-care-analytics-with-microsoft-excel-5h9l'
  },
  {
    id: 2,
    title: 'SALES REPORT ANALYSIS USING POWER BI',
    description: 'I performed exploratory data analysis and visualization of a Burmese retail store\'s 2019 sales records using Power BI. Data cleaning was conducted with Power Query Editor. The visualizations highlighted key performance indicators (KPIs) and provided insights to improve sales strategies. Key findings included the most sold products, the most profitable payment channel, and the least profitable products. Strategic recommendations were offered to support the store\'s growth.',
    imageUrl: 'https://res.cloudinary.com/dtqrzl86y/image/upload/v1726647801/Personal%20Gigs/power-BI_aobn1q.png',
    projectLink: 'https://dev.to/theophilus1320/data-analysis-with-power-bi-sales-analysis-156f'
  },
  {
    id: 3,
    title: 'DATA EXPLORATION AND ANALYSIS USING PYTHON',
    description: 'I analyzed the 2023 Global Development and Prosperity Index using Python libraries, focusing on key metrics. Insights included the top and bottom ten ranked countries, their strengths, and areas for improvement. The study examined the link between governance and living conditions, providing actionable recommendations. Visualizations and statistical analysis revealed global prosperity trends. The findings aim to enhance developmental outcomes and understanding of prosperity dynamics.',
    imageUrl: 'https://res.cloudinary.com/dtqrzl86y/image/upload/v1744065352/HIM_aiqsms.png',
    projectLink: 'https://dev.to/theophilus1320/data-analysis-with-pythonanalysis-of-the-global-development-and-prosperity-index-for-the-year-2023-2fj4'
  },
  {
    id: 4,
    title: 'DATA EXPLORATION USING SQL',
    description: 'I analyzed global internet usage using a dataset from Gapminder.org, focusing on the number and percentage of internet users worldwide. Key insights included the total global internet user count, countries with the highest and lowest usage, and the top and bottom five countries by internet users. The study also examined the correlation between internet usage and population. Findings highlighted global internet usage patterns and trends.',
    imageUrl: 'https://res.cloudinary.com/dtqrzl86y/image/upload/v1726648746/Personal%20Gigs/sqlf_ikagrq.png',
    projectLink: 'https://dev.to/theophilus1320/exploratory-data-analysis-using-sql-10ka'
  },
  {
    id: 5,
    title: 'PEOPLE ANALYTICS USING MICROSOFT EXCEL',
    description: 'I carried out an analysis of this HR dataset of 100 host companies in Nigeria, focusing on fellows\' demographics and distribution. Key metrics included average fellows per company, counts by age, gender, and location. The findings were visualized through a dashboard, aiding strategic planning and HR improvements.',
    imageUrl: 'https://res.cloudinary.com/dtqrzl86y/image/upload/v1726647801/Personal%20Gigs/excel_r3l4k9.jpg',
    projectLink: 'https://dev.to/theophilus1320/data-analysis-with-microsoft-excel-people-analytics-43c2'
  }

];

const PortfolioItem = memo(({ project }) => {
  // displayName = 'PortfolioItem',
  return (
    <div className="portfolio-item">
      <h3 className="title-class">{project.title}</h3>
      <img
        src={project.imageUrl}
        alt={project.title}
        className="portfolio-image"
        loading="lazy"
      />
      <p>{project.description || "Project Description"}</p>
      <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="view-project-button">
        View Project
      </a>
    </div>
  );
});

// PortfolioItem.displayName = "PortfolioItem";
const Project = () => {
  return (
    <section className="portfolio-section">
      <h1>PROJECTS</h1>
      <div className="portfolio-container">
        <Suspense fallback={<div>Loading Projects...</div>}>
          {portfolioProjects.map((project) => (
            <PortfolioItem key={project.id} project={project} />
          ))}
        </Suspense>
      </div>
    </section>
  );
};

export default Project;
