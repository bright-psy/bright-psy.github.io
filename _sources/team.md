---
jupytext:
  formats: ipynb,md
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  name: python3
  language: python
  display_name: Python 3
---

# Team

## Members

![Team](_static/images/the_team.jpeg)

```{code-cell} python
:tags: [remove-input]

from IPython.display import display, HTML

team_data = [
    {
        "section": "Principal Investigator",
        "members": [
            {
                "name": "Clara Moreau",
                "title": "M.Sc., Ph.D (Principal Investigator)",
                "image": "cmoreau.jpeg",
                "links": {
                    "LinkedIn": "https://www.linkedin.com/in/clara-a-moreau-b44b6858/",
                    "Scholar": "https://scholar.google.com/citations?user=tkN9j_cAAAAJ"
                },
                "bio": """Clara Moreau has a transdisciplinary background that integrates neuroscience, genetics, psychology, and bioinformatics. This unique combination of disciplines has enabled her to tackle fundamental psychiatric problems from innovative perspectives. Nonetheless, her primary expertise lies in neuroimaging. Clara Moreau has more than 10 years of experience in the use of structural, functional, and diffusion MRI, acquired in renowned imaging laboratories such as MNI (McGill, Montreal), the Imaging Genetics Center (USC, Los Angeles), and Neurospin (Saclay)."""
            }
        ]
    },
    {
        "section": "PhD Students",
        "members": [
            {
                "name": "Pierre Bergeret",
                "title": "Ph.D. Student",
                "image": "pbergeret.jpeg",
                "links": {
                    "LinkedIn": "https://www.linkedin.com/in/pierrebergeret",
                    "GitHub": "https://github.com/pbergeret12"
                },
                "bio": """Pierre Bergeret holds a Bachelor’s degree in Biology and two Master’s degrees, one in Behavioral Neuroscience and the other in Bioinformatics, completed during his studies in France. Following his final-year internship, he specialized in the analysis of neuroimaging data. With this interdisciplinary background, he is currently pursuing a PhD in Psychiatric Sciences and Addictology at the BRIGHT laboratory, focusing on understanding the shared endophenotypes and genetic foundations of various psychiatric conditions."""
            },
            {
                "name": "Clara El Khantour",
                "title": "Ph.D. Student",
                "image": "celkhantour.jpeg",
                "links": {
                    "LinkedIn": "https://www.linkedin.com/in/clara-el-khantour-32706321a/"
                },
                "bio": """Clara El Khantour holds a bachelor's degree in cognitive neuroscience, followed by a master's in neuroscience, during which she developed an interest in computational neuroscience and neuroimaging analyses. She is currently pursuing a PhD in psychiatry at the Université de Montréal, focusing on the use of neuroimaging to predict the prognosis in eating disorders."""
            }
        ]
    },
    {
        "section": "Interns",
        "members": [
            {
                "name": "Seann Wang",
                "title": "Intern",
                "image": "seann_wang.jpeg",
                "links": {
                    "LinkedIn": "https://www.linkedin.com/in/seann-wang-a72305179/",
                    "GitHub": "https://github.com/wangseann"
                },
                "bio": """Seann Wang is a research intern at the BRIGHT Lab at CHU Sainte Justine. He works with other members of the lab and the Enigma Resting-State group. He holds a B.Sc. in Behavioural Neuroscience from the University of British Columbia and has conducted research across multiple institutions, including OIST (Okinawa, Japan) and ICORD (UBC, Vancouver, British Columbia). Recently, he has been working with members of Enigma to test and quality assess the use of HALFpipe, and develop an easy-to-use codebase to evaluate denoising strategies applied by HALFpipe. He is particularly interested in big data approaches to neuroscience, integrating information-theoretic approaches and multimodal data to improve decoding of mental states, as well as machine learning applications for biomarker discovery in psychiatric disease. Outside of the lab, Seann loves to play music, traveling, and enjoying Montreal's beautiful sunny days."""
            },
            {
                "name": "Clara Maria Bridi",
                "title": "Intern",
                "image": "clara_maria.jpeg",
                "links": {
                    "LinkedIn": "https://www.linkedin.com/in/clara-maria-bridi-ab7674271/"
                },
                "bio": """Clara Maria Bridi is a medical student at the Université de Montréal. She is currently doing a research internship at the BRIGHT lab due to her interest in adolescent medicine and eating disorders."""
            }
        ]
    }
]

html = """
<style>
.card {
  width: 220px;
  min-height: 380px; /* Hauteur uniforme */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 2px 2px 6px rgba(0,0,0,0.08);
  text-align: center;
  font-family: sans-serif;
}
.card img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 0.5rem;
}
.modal {
  display: none;
  position: fixed;
  z-index: 999;
  padding: 2rem;
  background-color: rgba(0,0,0,0.5);
  left: 0; top: 0;
  width: 100%; height: 100%;
}
.modal-content {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  max-width: 600px;
  margin: 5% auto;
}
.modal-content h3 {
  margin-top: 0;
}
.modal-close {
  float: right;
  font-weight: bold;
  cursor: pointer;
}
</style>
"""

html += "<script>function toggleModal(id){ var m = document.getElementById(id); m.style.display = (m.style.display === 'block') ? 'none' : 'block'; }</script>"

for group in team_data:
    html += f"<h2>{group['section']}</h2><div style='display: flex; flex-wrap: wrap; gap: 1.5rem;'>"
    for member in group["members"]:
        links = "".join([f"<a href='{url}' target='_blank'>🔗 {name}</a> " for name, url in member["links"].items()])
        bio_id = member["name"].replace(" ", "_").lower() + "_modal"
        image_path = f"_static/images/{member['image']}"
        html += f"""
        <div class="card">
            <img src="{image_path}" alt="{member['name']}"/>
            <strong>{member['name']}</strong><br/>
            <em>{member['title']}</em><br/><br/>
            {links}<br/>
            <button onclick="toggleModal('{bio_id}')">📘 Bio</button>
        </div>
        <div id="{bio_id}" class="modal" onclick="toggleModal('{bio_id}')">
            <div class="modal-content" onclick="event.stopPropagation()">
                <span class="modal-close" onclick="toggleModal('{bio_id}')">✖</span>
                <h3>{member['name']}</h3>
                <p>{member['bio']}</p>
            </div>
        </div>
        """
    html += "</div>"

display(HTML(html))
