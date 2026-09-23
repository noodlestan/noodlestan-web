# Pseudo HTML: Homepage

```
header
  h1. {site.title}

main
  section (hero)
    h2. {home.hero.tagline}
    p (large). {home.hero.prose}

  section (projects)
    h2. {home.projects.title}
    p. {home.projects.prose}

    article (project)
      h3. {projects[i].name}
      p. {projects[i].description}
      a. {projects[i].repository}

    ...

  section (workflows)
    h2. {home.workflows.title}
    p. {home.workflows.prose}
    p. ...

  section (contributing)
    h2. {home.contributing.title}
    p. {home.contributing.prose}
    p. ...
    nav
      a. {home.contributing.discord}
      a. {home.contributing.github}
      p. ...
      a. {home.contributing.contact}

  section (about)
    h2. {home.about.title}
    p. {home.about.prose}
    p. ...

footer
  ul. (links) li. a. {contact.link[i]}
  p. {site.footer}
```
