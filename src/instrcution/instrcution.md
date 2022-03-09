---
title: Tutorial Registration
layout: layouts/page.njk
---
{% for Tutorial in tutorialregistrasi.data %}
{{ Tutorial.detail_petunjuk }}
{% endfor %}
