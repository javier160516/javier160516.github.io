document.addEventListener('DOMContentLoaded', () => {
    fillSkills();
});

const fillSkills = async () => {
    const containerSkills = document.querySelector('.container_skills');
    const skills = await fetch('../skills.json').then(res => res.json());
    Object.values(skills.skills).forEach(skill => {
        containerSkills.innerHTML += `
        <div class="skill" data-aos="zoom-in">
            <div class="skill_image">
                <img src="${skill.src}" alt="${skill.alt}" loading="lazy">
            </div>
            <p class="skill_name">${skill.name}</p>
        </div>
        `;
    })
}