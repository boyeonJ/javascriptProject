# 01. 전체 html

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


# 02. img 스타일 적용

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

# 03. [position](https://velog.io/@boyeon_jeong/css-position)
![image](https://github.com/boyeonJ/javascriptProject/assets/32887635/7e5c7969-92cb-4d24-a3a7-5a770062c149)

![image](https://github.com/boyeonJ/javascriptProject/assets/32887635/f22e5a04-9a7b-402c-9ffd-71adacbc525e)

CSS의 `position` 속성은 요소를 어떻게 배치할지 결정하는 데 사용됩니다. `position` 속성은 일반적으로 다음 다섯 가지 값 중 하나를 가질 수 있습니다:

1. `static`: 이 값은 `position` 속성의 기본 값이며, 요소들은 문서 흐름에 따라 배치됩니다. 이 값은 일반적으로 따로 지정하지 않을 때 사용됩니다.

2. `relative`: 요소를 문서 흐름에 따라 배치하되, 요소의 위치를 상대적으로 조정할 수 있습니다. `top`, `right`, `bottom`, `left` 속성을 사용하여 요소를 이동할 수 있습니다. 상대적으로 이동하더라도 **해당 공간은 요소가 원래 있어야 하는 위치에 유지**됩니다.

3. `absolute`: **요소를 문서 흐름에서 제거**하고, **가장 가까운 position 속성 값이 static이 아닌 조상 요소**를 기준으로 배치됩니다. 이로 인해 다른 요소들은 해당 요소의 공간을 무시하게 됩니다. `top`, `right`, `bottom`, `left` 속성을 사용하여 위치를 조절합니다. 

4. `fixed`: 요소를 뷰포트(브라우저 창)를 기준으로 고정시킵니다. **스크롤해도 요소는 화면에 고정**되어 있습니다. 또한 `top`, `right`, `bottom`, `left` 속성을 사용하여 위치를 지정할 수 있습니다.

5. `sticky`: 요소는 일반적으로 문서 흐름에 따라 배치되지만, **스크롤 시 특정 위치에 도달하면 지정된 위치에 고정**됩니다. 이것은 웹페이지에서 고정 헤더나 사이드바를 만들 때 유용합니다. `top`, `right`, `bottom`, `left` 속성을 사용하여 스티키 요소의 위치를 지정합니다.

### 다른 요소의 위치를 기준으로 배치하는 경우 relative와 absolute를 활용하는 방법

요소를 다른 요소의 위치를 기준으로 배치하려는 경우, CSS의 `position` 속성을 사용하여 상대적인 위치 조정을 할 수 있습니다. 이것은 웹 디자인에서 요소 간의 상대적인 배치를 제어하거나 레이아웃을 조정할 때 유용합니다.

일반적으로 다른 요소의 위치를 기준으로 배치하는 경우, 다음과 같은 단계를 따릅니다:

1. **부모 요소 설정**: 요소를 포함하는 부모 요소 (컨테이너)에 `position: relative;` 속성을 설정합니다. 이렇게 하면 부모 요소가 요소의 위치 기준이 됩니다. 아래는 예시입니다:

   ```css
   .container {
       position: relative;
   }
   ```

2. **배치할 요소 설정**: 위치를 기준으로 배치할 요소에 `position: absolute;` 속성을 설정합니다. 이로써 해당 요소는 문서 흐름에서 제거되며, 부모 요소의 위치를 기준으로 배치됩니다.

   ```css
   .positioned-element {
       position: absolute;
   }
   ```

3. **위치 지정**: 배치할 요소에 `top`, `right`, `bottom`, `left`와 같은 속성을 사용하여 원하는 위치를 지정합니다. 이러한 속성을 사용하여 요소를 부모 요소 내에서 원하는 위치로 이동시킬 수 있습니다.

   ```css
   .positioned-element {
       position: absolute;
       top: 20px;
       left: 30px;
   }
   ```

4. **부모 요소 내에서 배치**: 이제 배치할 요소는 부모 요소 내에서 원하는 위치로 배치됩니다. 배치할 요소의 위치는 부모 요소의 좌상단 모서리를 기준으로 지정된 좌표에 따라 조정됩니다.


