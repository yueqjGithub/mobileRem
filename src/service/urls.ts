export type UrlKeys = 'activeList' | 'submit' | 'result'

export type Urls = {
  [key in UrlKeys]: string
}

const urls: Urls = {
  activeList: '/questionnaire/list',
  submit: '/questionnaire/submit',
  result: '/questionnaire/record'
}

export {
  urls
}
