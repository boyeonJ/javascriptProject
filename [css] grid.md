## flex와 grid
flex는 1차원(row or column)으로 아이템을 배치할 수 있고, grid는 2차원으로 아이템을 배치할 수 있다.
> flex에서도 wrap으로 하면 화면이 넘어가는것에 대한 것을 정의할 수 있다.

## grid(부모 컨테이너) 속성
> ![](https://velog.velcdn.com/images/boyeon_jeong/post/ec39df8a-49dd-457b-8322-79bf281d4c9f/image.png)

#### 1. grid-template-columns, grid-template-rows
```css
.container {
	display: grid;
    //아래 3가지는 모두 같은것
	grid-template-columns: 20% 20% 20% 20% 20%;
	grid-template-columns: repeat(5, 20%);
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	grid-template-columns: repeat(5, 1fr);
    //repeat이랑 섞어서 쓰는 것도 가능
    grid-template-columns: 100px 200px repeat(3, 1fr);
}
```
#### 2. grid-auto-rows
```css
.container {
	display: grid;
    //모두 150px 높이를 가진다.
    //따라서 contents 넘어가면 짤린다.
    grid-auto-rows: 150px;
    //contents가 크다면 딱 맞게 적용되고, 나머지는 150px 높이를 가진다.
    //즉, 최소 150px의 높이를 가진다.
    grid-auto-rows: minmax(150px, auto);
}
```
#### 3. grid-template-areas
```css

```

#### 4. grid-gap, grid-columns-gap, grid-rows-gap
```css

```

## grid cell(자식 컨테이너) 속성
#### 1. grid-columns-start, grid-columns-end, grid-row-start, grid-row-end, grid-columns, grid-row
```css
.item2 {
	grid-columns-start: 2;
    grid-columns-end: 4;
    //위와 같음
    grid-columns: 2 / 4;
    //위와 같음(span 총 얼마만큼 차지할건지)
    grid-columns: 2 / span 2;
}
```

#### 2. grid-areas

## areas
`grid-template-areas`는 CSS Grid 레이아웃을 정의할 때 사용되는 속성 중 하나로, 그리드 컨테이너 내의 각 그리드 아이템을 명명된 영역에 배치할 때 사용됩니다. 이것은 레이아웃을 시각적으로 표현하고 디자인 요소를 조직화하는 데 유용합니다.

`grid-template-areas`를 사용하려면 다음과 같은 단계를 따릅니다:

1. 그리드 컨테이너에서 `grid-template-areas` 속성을 사용하여 그리드 레이아웃의 구조를 정의합니다. 이때 그리드 아이템의 배치를 표현하는 문자열을 사용합니다.

2. 그리드 아이템에 `grid-area` 속성을 사용하여 각 아이템을 그리드 레이아웃의 특정 영역에 배치합니다.

예를 들어, 다음은 `grid-template-areas`를 사용한 간단한 예시입니다:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  grid-template-areas:
    "header header header"
    "sidebar main main";
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}
```

이 코드에서:

- `grid-template-areas`는 2x3 그리드를 정의합니다. 각 문자열은 그리드 아이템의 위치를 나타내며, 이 예시에서는 "header", "sidebar", "main" 등의 명명된 영역을 사용합니다.
- 각 그리드 아이템(`.header`, `.sidebar`, `.main`)은 `grid-area` 속성을 사용하여 특정 영역에 배치됩니다. 이를 통해 각 아이템은 그리드 레이아웃의 지정된 위치에 배치됩니다.

`grid-template-areas`를 사용하면 레이아웃을 시각적으로 정의하고 디자인 요소를 구성하는 것이 더 직관적이며 가독성이 향상됩니다. 이것은 복잡한 그리드 레이아웃을 간단하게 만들 수 있고, 유지 보수가 쉽다는 이점이 있습니다.

## fr(fractional unit)
그리드 레이아웃에서 상대적인 너비 또는 높이를 나타내는 CSS 단위입니다. `fr`은 사용 가능한 공간을 동등하게 나누는 역할을 합니다. 다음은 `fr`을 사용한 예시로 설명하겠습니다.

예를 들어, 다음과 같이 그리드 컬럼을 설정하면:

```css
grid-template-columns: 1fr 2fr 1fr;
```

- 첫 번째 컬럼은 `1fr`로 설정되었으므로 사용 가능한 가로 공간의 1/4을 차지합니다.
- 두 번째 컬럼은 `2fr`로 설정되었으므로 사용 가능한 가로 공간의 2/4(또는 1/2)을 차지합니다.
- 세 번째 컬럼은 다시 `1fr`로 설정되었으므로 사용 가능한 가로 공간의 1/4를 차지합니다.

이렇게 `fr`을 사용하면 그리드 컬럼을 상대적인 비율로 설정할 수 있으며, 컨테이너의 크기에 따라 자동으로 조절됩니다. 이것은 레이아웃을 유연하게 만들어 다양한 화면 크기 및 디바이스에 대응하는 데 유용합니다.

> 출처: https://www.youtube.com/watch?v=nxi1EXmPHRs