export default {
  port: 1337,
  dbUri: "mongodb://localhost:27017/rest-api-best-practices",
  saltWorkFactor: 10,
  publicKey: `
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl+J0NIK0pvgz0QQopx5X
JI3WsgOaTXPJM17V67n+wWJoCCEx/SLhvgMEZSGVNRlokbSVjkF+mS4PCami8PyT
zFmjqAslZUhywdDAAIHSzGLsN2v6hBy873NBgjLVeL/Uek4iWAGgsAPI+RkDvOje
wYn7uuHVu5kthCond9vf5jWAlrcn5Ta54kPmRWKy4ltzQ0q3Izu6xnrME4suz6W7
1kYDJnD4oghyQMN0ziZia3ndtTu9JvsD598VY2EWeErNLmuqLEwrhOGWno/DUX50
ejW3zmI/sR1ALCHkNM7+qhKF3HBlDzThtTunr0/g/NY+sb1J3kc74xknTO51jzde
/QIDAQAB
-----END PUBLIC KEY-----
`,
  privateKey: `
-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAl+J0NIK0pvgz0QQopx5XJI3WsgOaTXPJM17V67n+wWJoCCEx
/SLhvgMEZSGVNRlokbSVjkF+mS4PCami8PyTzFmjqAslZUhywdDAAIHSzGLsN2v6
hBy873NBgjLVeL/Uek4iWAGgsAPI+RkDvOjewYn7uuHVu5kthCond9vf5jWAlrcn
5Ta54kPmRWKy4ltzQ0q3Izu6xnrME4suz6W71kYDJnD4oghyQMN0ziZia3ndtTu9
JvsD598VY2EWeErNLmuqLEwrhOGWno/DUX50ejW3zmI/sR1ALCHkNM7+qhKF3HBl
DzThtTunr0/g/NY+sb1J3kc74xknTO51jzde/QIDAQABAoIBADkqGAZzcz6siAQR
BqPvfWjaoYWaaYbhH0bgWK9B76olOXZl2ASoDkKPrCXL//ZeO8crKmbCK73HYg2G
9TayOYZd7oSevVJjdB2STdFjC021paYuU7lJf6q3vF4ed83clUH7Cl4JLstQgWGP
kqKVGtHI9x+dQ+45drIZk4U/EgP4ZovbzmAiEyXa77lz2MPRUG5YPw4zukAlcyYm
fbmTyC6GRUUsC/XaRP8U2gdBizi4UWxFGTpvaEiTJPBCko8TUz/ZfMHqhYCTFo1x
e5HaA/L2j2gg2HZWLcyzaNvTjR39+JHBSwF1GRX+nchMaqaeAvcBhxLJKzuzV6YR
nlSNBcECgYEAy9vOeBwj96Tqwluu2mxmEmoW5odGF/vyocAqOF4mJS1qc4Hgnn1p
xRT9qncgU5RQOf2oXo/NPJwBPME5xx+x32TsFlkokWHSuz7DvGTdJFx1NYxznySN
alF00Oi9P5iRXifvRdY09jG4l9DlWkNJrdZkGIhR8G4GGfL3vCf0kgUCgYEAvruB
2jwbDGKwkxB1/IpctKY3JGwwVTjsI8/ih/jh+w8/slA2lfIoCiEFm41EWIFl8COx
80Jg6sVS1uqvSFrB4TIre7YA1vHLd4v32yIgREuO38265M7AEu8RZmrZIaD9EgmM
bUMrcUM1eTPkhyZkwfVE6Xh+77NxtlfFZpR00pkCgYBElEJmF5ll8v3iunMdGcBQ
y42+qZ1D7kcWcQ4C/nE4qomYKAYHa0tMuJ4JXZ/rXgaLK7Ebdqblj9m+tYYZXak5
7LqbXg0Os2jwAtJYK1pVpCDuDbzLucE1FggFS3Z20X19vlN5G/GfLOTbdbPiZKaB
q5Dqy9k819aHnjwG+S4GfQKBgQCfbeLsBcPiRXgtZdwJ3aoCQtHi+yAnjG4uvS0w
1UQn9KYcqdoG2qTHWrTyQlI33OnVojC0Eu8qLwjApukfhOV9FM+uGAN5qCGYawIi
RNNN4w6pWrF3Yq7A5N7ZikS3THddpWehST097pz7E/pZUil0y0zwDw2j1Y4eih1y
UnOYOQKBgFbGuU+Sz1iFGvNY2gR6n01+sDS5czSvI03VdGqWQfwCECd9Z9BufvgW
zu0XvwfiLL0sDCfHPRp5DiohvJg8Hxy7FyYCwecL7kftVw044PQoUE31NiZiSwF/
HbfHBsujfW4yIS9uraQ4YVsyRMk5mVM17J88ZVo8XL/cebeBp3iD
-----END RSA PRIVATE KEY-----`,
  accessTokenTtl: "1h",
  refreshTokenTtl: "1y"
}