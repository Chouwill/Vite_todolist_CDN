import{_ as v,r as i,c as m,a as f,w as g,b as e,d as c,v as p,e as h,o as x,f as b,p as w,g as k,h as V}from"./index-BL_COF_X.js";const r=a=>(w("data-v-8b035f8c"),a=a(),k(),a),y={class:"register_box"},I=r(()=>e("h2",null,"註冊",-1)),B=r(()=>e("label",{for:""},"帳號:",-1)),C=r(()=>e("label",{for:""},"密碼:",-1)),N=r(()=>e("label",{for:""},"暱稱:",-1)),S="https://todolist-api.hexschool.io",T={__name:"Register",setup(a){const t=i(""),s=i(""),u=i(""),d=async()=>{try{const n=await V.post(`${S}/users/sign_up`,{email:t.value,password:s.value,nickname:u.value});alert("你成功了"),console.log(n),console.log(t.value,s.value)}catch(n){alert("註冊錯誤"),console.log(n.response.data),console.log(t.value,s.value)}};return(n,o)=>{const _=h("router-link");return x(),m("div",y,[f(_,{to:"/"},{default:g(()=>[b(" 登入 ")]),_:1}),I,e("ul",null,[e("li",null,[B,c(e("input",{type:"email","onUpdate:modelValue":o[0]||(o[0]=l=>t.value=l)},null,512),[[p,t.value]])]),e("li",null,[C,c(e("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=l=>s.value=l)},null,512),[[p,s.value]])]),e("li",null,[N,c(e("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=l=>u.value=l)},null,512),[[p,u.value]])])]),e("button",{onClick:d},"註冊")])}}},R=v(T,[["__scopeId","data-v-8b035f8c"]]);export{R as default};
