---
title: Scholarship
layout: layouts/page.njk
tags: posts
---

{% for scholarship in beasiswa.data %}
- [{{ scholarship.Nama_Beasiswa }}](/scholarship/{{ scholarship.Nama_Beasiswa | slug }})
{% endfor %}