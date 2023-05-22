import BasicConfig from "../constant/basic"

const toAuth = () => {
  const authUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${BasicConfig.wxConfig.appId}&redirect_uri=${BasicConfig.wxConfig.redirect_url}&response_type=${BasicConfig.wxConfig.response_type}&scope=${BasicConfig.wxConfig.scope}#wechat_redirect`
  window.location.href = authUrl
}

export {
  toAuth
}