# Interest Calculator as Web Component

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

A simple compount interest calculator built as a web component.

You can calculate the principal, interest, duration or the final amount based on the other values.

## How to use

Include the `interest-component.js` script into your page.

Then use the `wc-interest-calc` selector to use the interest calculator in your page.

## Properties

| Property      | Attribute      | Description                                                                      | Type     | Default               |
| ------------- | -------------- | -------------------------------------------------------------------------------- | -------- | --------------------- |
| `checked`     | `checked`      | Which of the radioButtons should be selected; possible values are descrbed below | `string` | `'finalAmount'`       |
| `duration`    | `duration`     | duration (in years)                                                              | `number` | `0`                   |
| `finalAmount` | `final-amount` | final Amount after interest is applied to the principal                          | `number` | `0`                   |
| `interest`    | `interest`     | interest                                                                         | `number` | `0`                   |
| `principal`   | `principal`    | principal (starting Amount)                                                      | `number` | `0`                   |
| `symbol`      | `symbol`       | symbol used next to the principal and final Amount input                         | `string` | `$`                   |
| `headerText`  | `header-text`   | Optional Header                                                                  | `string` | `Interest Calculator` |

Possible values for `checked` are:
`'principal'`, `'interest'`, `'duration'`, `'finalAmount'`

## License

- [Stencil](https://github.com/ionic-team/stencil) is and my code are licenced unter MIT
- My code is licenced unter [MIT](https://raw.githubusercontent.com/ChrisSte/wc-interest-calc/master/LICENSE)
