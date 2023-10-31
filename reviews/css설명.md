# 전체 html

<img width="426" alt="image" src="https://github.com/boyeonJ/javascriptProject/assets/32887635/e855f9c5-fee7-4067-b3c1-df2fa86f0dec">


### section 안에
- title영역
- article 영역

### img는 div 안에 (img-container)

### paging button은 
div 영역 내부에 (button-container)
- button (prev-btn, next-btn)
- i

> [link](https://github.com/boyeonJ/javascriptProject/blob/main/reviews/index.html)


# img 스타일 적용

![](https://velog.velcdn.com/images/boyeon_jeong/post/fab47e10-c906-42b3-a253-566656488d3a/image.png)

### object-fit

`object-fit`은 CSS 속성 중 하나로, 이미지 또는 비디오와 같은 대체 요소(Replaced Element)의 크기 조절 및 위치 조정을 제어하는 데 사용됩니다. 주로 `img`, `video`, `object` 등 대체 요소를 다룰 때 유용합니다. `object-fit` 속성은 이미지나 비디오가 부모 요소에 맞추어 표시되는 방식을 지정할 수 있습니다.


1. `fill`: 요소가 부모 요소에 **딱 맞게 확장**되어 크롭 없이 채워집니다. 종횡비가 유지되지 않을 수 있습니다.

![](https://velog.velcdn.com/images/boyeon_jeong/post/c1864777-403b-4f79-85d5-c11e8027c750/image.png)


2. `contain`: 요소가 부모 요소 내에 **모두 보이도록** 크기를 조절하며, 종횡비를 유지합니다. 부모 요소의 여백을 채우는 방식으로 크기가 조절됩니다.
![](https://velog.velcdn.com/images/boyeon_jeong/post/6e48ded5-7ed6-4b5c-a747-94214b4175f2/image.png)

3. `cover`: 요소가 부모 요소를 **가득 채우도록 크기를 조절**하며, 종횡비를 유지합니다. **일부 요소가 잘릴 수 있습니다.**
![](https://velog.velcdn.com/images/boyeon_jeong/post/9d26837a-72ce-44b8-8fc3-d3a6cc16f079/image.png)

4. `none` (기본값): 크기 조절 없이 요소가 원래 크기로 표시됩니다. 종횡비를 유지하지 않습니다.
![](https://velog.velcdn.com/images/boyeon_jeong/post/5992caa7-07d1-40ad-9ed7-ca8661a8192d/image.png)

5. `scale-down`: `contain` 및 `none` 중 작은 크기로 표시됩니다. 요소가 부모 요소 내에 맞지 않을 때 사용됩니다.
![](https://velog.velcdn.com/images/boyeon_jeong/post/2c37aeb1-ad6e-40cc-933a-2675c1ba9b1b/image.png)

#### 결론적으로
- 찌그러져도 꽉 채우려면 : fill
- 잘려도 안 찌그러지게 채우려면 : cover
- 꽉 안채워도 되면 : contain

> 크롭(crop): 이미지나 비디오를 일부 영역을 자르거나 잘라내는 것을 의미합니다. 
종횡비: 이미지나 화면의 너비와 높이 사이의 비율을 나타내며, 주로 가로 너비와 세로 높이 사이의 비율을 나타냅니다.

> https://codepen.io/jensimmons/pen/ZWRzjQ?editors=1100
> https://velog.io/@boyeon_jeong/css-img

