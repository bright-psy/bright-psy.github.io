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
                "title": "M.Sc, Ph.D. Student",
                "program": "PhD of Psychiatric Sciences and Addictology",
                "university": "University of Montréal",
                "image": "pbergeret.jpeg",
                "links": {
                    "LinkedIn": "https://www.linkedin.com/in/pierrebergeret",
                    "GitHub": "https://github.com/pbergeret12"
                },
                "bio": """Pierre Bergeret holds a Bachelor’s degree in Biology and two Master’s degrees, one in Behavioral Neuroscience and the other in Bioinformatics, completed during his studies in France. Following his final-year internship, he specialized in the analysis of neuroimaging data. With this interdisciplinary background, he is currently pursuing a PhD in Psychiatric Sciences and Addictology at the BRIGHT laboratory, focusing on understanding the shared endophenotypes and genetic foundations of various psychiatric conditions."""
            },
            {
                "name": "Clara El Khantour",
                "title": "M.Sc, Ph.D. Student",
                "program": "PhD of Psychiatric Sciences and Addictology",
                "university": "University of Montréal",
                "image": "celkhantour.jpeg",
                "links": {
                    "LinkedIn": "https://www.linkedin.com/in/clara-el-khantour-32706321a/",
                    "GitHub": "https://github.com/claraElk"
                },
                "bio": """Clara El Khantour holds a bachelor's degree in cognitive neuroscience, followed by a master's in neuroscience, during which she developed an interest in computational neuroscience and neuroimaging analyses. She is currently pursuing a PhD in psychiatry at the Université de Montréal, focusing on the use of neuroimaging to predict the prognosis in eating disorders."""
            }
        ]
    }
]

html = """
<style>
.card {
  width: 220px;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--pst-color-border);
  border-radius: 12px;
  padding: 1rem;
  background-color: var(--pst-color-surface);
  box-shadow: 2px 2px 6px rgba(0,0,0,0.08);
  text-align: center;
  font-family: sans-serif;
  font-size: 14px;
  color: var(--pst-color-text-base);
}

.card img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 0.5rem;
}

.card small {
  color: var(--pst-color-text-muted);
  font-size: 12px;
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
  background: var(--pst-color-surface);
  color: var(--pst-color-text-base);
  padding: 1rem;
  border-radius: 8px;
  max-width: 600px;
  margin: 5% auto;
  border: 1px solid var(--pst-color-border);
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
        program_html = f"{member['program']}<br/>" if 'program' in member else ""
        university_html = f"{member['university']}<br/>" if 'university' in member else ""

        html += f"""
        <div class="card">
            <img src="{image_path}" alt="{member['name']}"/>
            <strong>{member['name']}</strong><br/>
            <em>{member['title']}</em><br/>
            {program_html}
            {university_html}
            <br/>
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
```


```{code-cell} html
:tags: [remove-input]
```

<div style="margin-top: 2rem;">
  <a href="alumni.html" class="view-all-button">They worked with us: see the alumni</a>
</div>


