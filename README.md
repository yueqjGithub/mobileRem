# 移动端的一种自适应方案详细分析记录，记录在此，以供后用
## 1.基准目的
### 1.1 确保开发中可以使用rem单位对元素进行定义
### 1.2 确保当屏幕宽度非设计稿尺寸时，可以正常显示

## 2.逻辑
### 2.1 假设设计稿宽度为750px
### 2.2 在开发中，我们更希望1rem = 100px，这样方便计算
### 2.3 在开发时，以设计稿的尺寸为基准，将1rem设置为100px，因为html默认font-size为16px,所以，在不考虑屏幕宽度变更的情况下，设置html font-size为625%（16 * 625% = 100）；
### 2.4 预设屏幕中有一个width=375px的元素,则在不考虑屏幕宽度变更时，为其设置的css为
```
.element {
  width: 3.75rem;
}
```
### 2.5 当开发完成，我们把页面放到375的屏幕上进行使用，此时.element的宽度仍然为375px，导致本来该占据屏幕一半的变成了占据整个屏幕宽,那么我们需要将1rem缩小
### 2.6 所以此时html的font-size 应该变为 `${375/750 * 625}%`,这样就可以在不变更元素css的情况下，让元素正确显示

## 3.实现
### 3.1 首先确保html的font-size可以正常根据屏幕宽度来计算
```
// 变更html font-size的方法
const setHtmlFontSize = (designWidth: number) => {
  const html = document.getElementsByTagName('html')[0]
  html.style.fontSize = `${(document.body.clientWidth / designWidth) * 625}%`
}
useEffect(() => {
  // 初始化设置
  setHtmlFontSize(750)
  // 当屏幕被放大缩小时，动态设置
  window.addEventListener('resize', () => setHtmlFontSize(750))
  return () => {
    window.removeEventListener('resize', () => setHtmlFontSize(750))
  }
},[])
```
### 3.2 以上代码在App.tsx中


