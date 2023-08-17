# 项目中遇到的Ts处理

## 1.列表页和详情页

### 1.1 使用继承extends

```typescript
export interface IDemoListItem {
    id:string;
    name:string;
}
export interface IDemoDetail extends IDemoListItem{
    age: number;
}
// IDemoListItem's Types
/** 
{
	  id: string;
	  name: string;
	  age: number;	
}
*/
```

### 1.2 使用Partial只使用类型的子集

```ty
export interface IDemoDetail {
    id:string;
    name:string;
    age: number;
}
export type IDemoListItem = Partial<IDemoDetail>

// IDemoListItem's Types
/** 
{
	  id: string;
	  name: string;
}
*/
```

## 2.定义接口的参数类型和返回类型

```typescript
// api
export const apiGetList = (params:getListParams) => {
	return myAxios<getListResp>.get({
       	url:"",
        params
    })
}
export const apiGetList = (data:getListParams) => {
	return myAxios<getListResp>.post({
       	url:"",
        post
    })
}
export interface getListParams{
    startTime:string;
    endTime:string;
    id:string;
}
type getListResp = BasicFetchResult<IDemoListItem>
/** 
* 接口返回类型规范
*/
export interface BasicFetchResult<T> {
	code:number;
    data:T;
    message:string;
}
```

## 3.业务常见的Ts类型

### 3.1 Record<string,any>

在TS中，Record类型用于表示一个键值对的集合，其中每个键都是一个字符串类型，值可以是任意类型。可以将Record类型看作是一个字符串索引签名为string的对象。

### 3.2 HTMLElement

HTMLElement 是所有 HTML 元素的基类，包括 `<div>`、`<p>`、`<span>` 等等。它提供了一系列属性和方法，用于操作和获取元素的信息。例如，可以使用 HTMLElement 对象的属性来修改元素的样式、内容或者监听元素的事件。

### 3.3 KeyboardEvent

KeyBoardEvent是一个接口，用于描述键盘事件的类型和属性。

### 3.4 自定义可空类型Nullable

```typescript
declare type Nullable<T> = T | null | undefined；
```

### 3.5 Partial

在TypeScript中，Partial是一个预定义的类型，用于将对象类型的所有属性变为可选的。可以使用Partial类型来创建一个新的类型，该类型会将所有属性变成可选的。

### 3.6 MouseEvent

MouseEvent 是一个在鼠标操作时触发的事件对象。它包含了与鼠标操作相关的属性和方法，例如鼠标的位置、按下的按键、点击次数等。常见的 MouseEvent 事件包括 click、dblclick、mousedown、mouseup、mousemove 等。

## 4.封装一个组件时，将组件类型封装进一个namespace

封装一个组件时，通过一个特定的命名空间管理它的所有类型。

```typescript
/**
* 以一个封装了地图SDK的组件为例
* components/mapComps/types.d.ts
*/
declare namespace TMap {
    interface IPoint {
        lat: number;
        lng: number;
    }
    
    interface IMapOptions:{
        zoom:number;
        // ...
    }
    class Map {
        constructor(el: HTMLElement,options:IMapOptions);
        setZoom(zoom:number):Map;
        // ...
    }
}

/**
* components/mapComps/index.vue
*/
const point:TMap.IPoint = { lat:1 , lng:2 }; 
```

