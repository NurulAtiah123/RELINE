---
pagination:
  data: beasiswa.data
  size: 1
  alias: scholarship
layout: layouts/page.njk
permalink: '/scholarship/{{ scholarship.Nama_Beasiswa | slug }}/'
---
[<< back](/scholarship)

## {{ scholarship.Nama_Beasiswa }}

<img src="http://localhost:8055/assets/{{ scholarship.gambar }}?access_token=nurul">

- Nama Beasiswa : **{{ scholarship.Nama_Beasiswa }}**
- Kouta Beasiswa : **{{ scholarship.kouta_beasiswa }}**
- Tanggal Publish : **{{ scholarship.tanggal_publish }}**

{{ scholarship.detail_beasiswa }}

