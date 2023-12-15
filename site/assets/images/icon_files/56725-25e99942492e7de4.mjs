"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[56725],{634784:l=>{var e={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CarouselEllipsis_pin",selections:[{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{args:null,kind:"FragmentSpread",name:"useLogSwipe_pin"},{args:null,kind:"FragmentSpread",name:"usePinCarouselData_pin"}],type:"Pin",abstractKey:null};e.hash="d9fe632f7481dc91f9007bbd592d44c2",l.exports=e},428132:l=>{var e,i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGetStringifiedCommerceAuxData_pin",selections:[{alias:null,args:null,kind:"ScalarField",name:"isEligibleForPdpPlus",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isEligibleForPdp",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isOosProduct",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isStaleProduct",storageKey:null},{alias:null,args:null,concreteType:"RichPinDataView",kind:"LinkedField",name:"richMetadata",plural:!1,selections:[{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,concreteType:"Brand",kind:"LinkedField",name:"brand",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"signature",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ShippingInfo",kind:"LinkedField",name:"shippingInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"freeShippingPrice",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"freeShippingValue",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ProductVariantSet",kind:"LinkedField",name:"variantSet",plural:!1,selections:[{alias:null,args:null,concreteType:"DimensionMetadata",kind:"LinkedField",name:"dimensionMetadata",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"values",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ProductVariant",kind:"LinkedField",name:"variants",plural:!0,selections:e=[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:[{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"itemId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"itemSetId",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shoppingFlags",storageKey:null},{alias:null,args:null,concreteType:"AggregatedPinData",kind:"LinkedField",name:"aggregatedPinData",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"isShopTheLook",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryPinData",kind:"LinkedField",name:"storyPinData",plural:!1,selections:e,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyPinDataId",storageKey:null}],type:"Pin",abstractKey:null};i.hash="75e0e2c4ba4bc9bcf9a593eacb51e671",l.exports=i},814118:l=>{var e={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useLogSwipe_pin",selections:[{args:null,kind:"FragmentSpread",name:"useGetStringifiedCommerceAuxData_pin"}],type:"Pin",abstractKey:null};e.hash="dbfca9820e0aa1302554a0137a270b16",l.exports=e},999018:(l,e,i)=>{i.d(e,{Y:()=>s,Z:()=>p});var n,a=i(667294);i(167912);var t=i(681669);let d=void 0!==n?n:n=i(428132),o=(l,e)=>{var i,n,a,t,d,o,r,u,s,p,_,c,g,v,m,y,h,S,f,P,k;let F=Symbol("SKIP"),I=l=>Object.entries(l).filter(([,l])=>l!==F).reduce((l,[e,i])=>({...l,[e]:i}),{});if("deprecated"!==l.type){let p=l.data;return I({...p.isEligibleForPdpPlus||p.isEligibleForPdp||p.isOosProduct||p.isStaleProduct?{...((l,i,n,a,t,d,o,r,u)=>{if(!e)return{image_count:F,image_index:F};let s=null===(l=p.richMetadata)||void 0===l?void 0:null===(i=l.products)||void 0===i?void 0:i[0];return{is_pdpplus:!0,carousel_image_count:F,brand_signature:(null==s?void 0:null===(n=s.brand)||void 0===n?void 0:n.signature)||F,free_shipping_price:(null==s?void 0:null===(a=s.shippingInfo)||void 0===a?void 0:a.freeShippingPrice)||F,free_shipping_value:(null==s?void 0:null===(t=s.shippingInfo)||void 0===t?void 0:t.freeShippingValue)||F,num_variants:(null==s?void 0:null===(d=s.variantSet)||void 0===d?void 0:null===(o=d.variants)||void 0===o?void 0:o.length)||F,total_dimension_option_count:(null==s?void 0:null===(r=s.variantSet)||void 0===r?void 0:null===(u=r.dimensionMetadata)||void 0===u?void 0:u.length)||F,valid_dimension_option_count:F}})(),pin_show_pdp_oos:!!p.isOosProduct||F,pin_show_pdp_stale:!!p.isStaleProduct||F,pin_show_pdp:!!p.isEligibleForPdp||F}:{},pin_is_shop_the_look:!!(null!==(i=p.shoppingFlags)&&void 0!==i&&i.includes(2)||null!==(n=p.aggregatedPinData)&&void 0!==n&&n.isShopTheLook)||F,is_available:!!(null!==(a=p.shoppingFlags)&&void 0!==a&&a.includes(1))||F,is_product_pin_v2:!!(null!==(t=p.shoppingFlags)&&void 0!==t&&t.includes(5))||F,is_rich_product_pin:!!(null!==(d=p.shoppingFlags)&&void 0!==d&&d.includes(6))||F,is_organic_product_carousel:F,item_id:((null===(o=p.richSummary)||void 0===o?void 0:null===(r=o.products)||void 0===r?void 0:r[0])||{}).itemId||F,item_set_id:((null===(u=p.richSummary)||void 0===u?void 0:null===(s=u.products)||void 0===s?void 0:s[0])||{}).itemSetId||F,story_pin_id:p.storyPinData?p.storyPinDataId:F})}{let i=l.data;return i?I({...i.is_eligible_for_pdp_plus||i.is_eligible_for_pdp||i.is_oos_product||i.is_stale_product?{...((l,n,a,t,d,o,r,u,s,p,_,c,g,v,m)=>{let y=null===(l=i.rich_metadata||i.rich_summary)||void 0===l?void 0:null===(n=l.products)||void 0===n?void 0:n[0],h=null!=y&&null!==(a=y.additional_images)&&void 0!==a&&a.length?{imageCount:(i.images?1:0)+y.additional_images.length,imageIndex:(null===(t=i.carousel_data)||void 0===t?void 0:t.index)||0}:i.carousel_data&&{imageCount:null===(d=i.carousel_data.carousel_slots)||void 0===d?void 0:d.length,imageIndex:i.carousel_data.index};if(!e)return h?{image_count:h.imageCount,image_index:h.imageIndex}:{};let S=null===(o=i.rich_metadata)||void 0===o?void 0:null===(r=o.products)||void 0===r?void 0:r[0],f=null!==(u=null==S?void 0:null===(s=S.variant_set)||void 0===s?void 0:s.variants)&&void 0!==u?u:[];return{is_pdpplus:!0,carousel_image_count:h?h.imageCount:F,brand_signature:(null==S?void 0:null===(p=S.brand)||void 0===p?void 0:p.signature)||F,free_shipping_price:(null==S?void 0:null===(_=S.shipping_info)||void 0===_?void 0:_.free_shipping_price)||F,free_shipping_value:(null==S?void 0:null===(c=S.shipping_info)||void 0===c?void 0:c.free_shipping_value)||F,num_variants:f.length||F,total_dimension_option_count:(null==S?void 0:null===(g=S.variant_set)||void 0===g?void 0:null===(v=g.dimension_metadata)||void 0===v?void 0:v.length)||F,valid_dimension_option_count:((null==S?void 0:null===(m=S.variant_set)||void 0===m?void 0:m.dimension_metadata)||[]).reduce((l,{name:e,values:i})=>l+(e&&i||[]).filter(l=>f.some(i=>{var n;return(null===(n=i.dimensions)||void 0===n?void 0:n[null!=e?e:""])===l})).length,0)||F}})(),pin_show_pdp_oos:!!i.is_oos_product||F,pin_show_pdp_stale:!!i.is_stale_product||F,pin_show_pdp:!!i.is_eligible_for_pdp||F}:{},pin_is_shop_the_look:!!(null!==(p=i.shopping_flags)&&void 0!==p&&p.includes(2)||null!==(_=i.aggregated_pin_data)&&void 0!==_&&_.is_shop_the_look)||F,is_available:!!(null!==(c=i.shopping_flags)&&void 0!==c&&c.includes(1))||F,is_product_pin_v2:!!(null!==(g=i.shopping_flags)&&void 0!==g&&g.includes(5))||F,is_rich_product_pin:!!(null!==(v=i.shopping_flags)&&void 0!==v&&v.includes(6))||F,is_organic_product_carousel:!!(null!==(m=i.shopping_flags)&&void 0!==m&&m.includes(10)||((null===(y=i.product_pin_data)||void 0===y?void 0:null===(h=y.items)||void 0===h?void 0:h[0])||{}).additional_images)||F,item_id:((null===(S=i.rich_summary)||void 0===S?void 0:null===(f=S.products)||void 0===f?void 0:f[0])||{}).item_id||F,item_set_id:((null===(P=i.rich_summary)||void 0===P?void 0:null===(k=P.products)||void 0===k?void 0:k[0])||{}).item_set_id||F,story_pin_id:i.story_pin_data?i.story_pin_data_id:F}):{}}},r=l=>0===Object.keys(l).length?{}:{commerce_data:JSON.stringify(l)},u=l=>{let{childDataKey__DEPRECATED:e}=(0,t.Zm)(d,null==l?{type:"deprecated",data:null}:l,{useGraphQLAdapter:l=>l,useLegacyAdapter:l=>l}),i=(0,a.useRef)(e);return(0,a.useEffect)(()=>{i.current=e}),(0,a.useCallback)(l=>r({...null==l?void 0:l.default,...o(i.current,!!(null!=l&&l.isPdpPlus)),...null==l?void 0:l.override}),[])},s=({children:l,pinKey:e})=>l(u(e)),p=u},356725:(l,e,i)=>{i.r(e),i.d(e,{default:()=>g});var n,a=i(702664);i(167912);var t=i(883119),d=i(729884),o=i(916117),r=i(966676),u=i(721782),s=i(447948),p=i(350118),_=i(785893);let c=void 0!==n?n:n=i(634784);function g({carouselData:l,carouselIndex:e,componentType:i,contextLogData:n,handleCarouselSwipe:g,isCloseup:v,isEditMode:m,pinKey:y,viewParameter:h,viewType:S,variant:f}){var P;let k;let F=(0,p.S6)();if(null==y||"graphqlRef"===y.type)k=y;else{let l=y.data;if("string"==typeof l){let e=F(l);k=null!=e?{type:"deprecated",data:e}:null}else k={type:"deprecated",data:l}}let{data:I,childDataKey__DEPRECATED:D}=(0,o.u)(c,k,{useLegacyAdapter:l=>{var e;return{entityId:null!==(e=l.id)&&void 0!==e?e:""}}}),b=(0,u.Z)(D,"CarouselEllipsis"),E=(0,d.Z)(D),K=l||E&&{carouselSlots:E.carouselSlots.map(({slotId:l,title:e})=>({id:l,title:e})),entityId:null!==(P=E.carouselId)&&void 0!==P?P:"",index:E.index},A=(0,a.useDispatch)();if(!K)return null;let L=(l,e,a)=>{var t,d,o;m||void 0===s.yR||(l.preventDefault(),l.stopPropagation(),A((0,s.yR)(null!==(o=null==I?void 0:I.entityId)&&void 0!==o?o:"",a))),void 0!==g&&g(a),b({pinId:null!==(t=null==I?void 0:I.entityId)&&void 0!==t?t:"",currentIndex:null!=e?e:0,nextIndex:a,carouselData:{carouselSlots:null===(d=K.carouselSlots)||void 0===d?void 0:d.map(l=>({id:l.id})),entityId:K.entityId},viewParameter:h,viewType:S,componentType:i,contextLogData:n,isEditMode:m})},{carouselSlots:O,index:x}=K,C="number"==typeof e?e:x,N="default"===f,T=N?"white":"#555",R=N?"rgba(255, 255, 255, 0.5)":"lightGray";return(0,_.jsx)(r.ZP.Consumer,{children:({viewportSize:l})=>{var e;return"sm"===l?null:(0,_.jsx)(t.xu,{alignItems:"center","data-test-id":"carousel-ellipsis",display:"flex",justifyContent:v?"end":"center",paddingY:m?1:0,children:O&&[...Array(null!==(e=O.length)&&void 0!==e?e:0).keys()].map(l=>{var e,i;return(0,_.jsx)(t.xu,{paddingX:1,children:(0,_.jsx)(t.iP,{accessibilityLabel:null!==(i=(O[l]||{}).title)&&void 0!==i?i:"",fullWidth:!1,onTap:({event:e})=>L(e,C,l),rounding:"circle",children:(0,_.jsx)(t.xu,{"data-test-id":"ellipsis-size",height:8,width:8,dangerouslySetInlineStyle:{__style:{backgroundColor:l===C?T:R}},rounding:"circle"})})},(null!==(e=null==I?void 0:I.entityId)&&void 0!==e?e:"")+l)})})}})}},721782:(l,e,i)=>{i.d(e,{Z:()=>u}),i(167912);var n,a=i(407043),t=i(916117),d=i(999018),o=i(67347);let r=void 0!==n?n:n=i(814118);function u(l,e){let{logContextEvent:i}=(0,a.v)(),{childDataKey__DEPRECATED:n}=(0,t.u)(r,l,{useLegacyAdapter:()=>({})});null!=l&&"deprecated"===l.type&&l.data&&"pin"!==l.data.type&&(0,o.nP)("web.graphql.debug.useLogSwipeError",{sampleRate:1,tags:{parent:e,rootType:l.data.type}});let u=(0,d.Z)(n);return function({pinId:l,currentIndex:e,nextIndex:n,carouselData:a,viewParameter:t,viewType:d,componentType:o,contextLogData:r,isEditMode:s,isEligibleForPdp:p}){if(!s){let{carouselSlots:s,entityId:_}=a;i({event_type:108,object_id_str:l,component:o,view_type:d,view_parameter:t,event_data:{pinCarouselSlotEventData:{carouselSlotId:(null==s?void 0:s[e])&&Number(s[e].id),carouselDataId:Number(_),carouselSlotIndex:e,toCarouselSlotIndex:n}},aux_data:{...r,...u({isPdpPlus:p})}})}}}},447948:(l,e,i)=>{function n(l,e){return{type:"CHANGE_CAROUSEL_SLOT_INDEX",payload:{id:l,index:e}}}function a(l,e){return{type:"SET_PIN_COMMENTS_DISABLED",payload:{id:l,pinCommentsDisabled:e}}}function t(l,e,i,n,a){return{type:"PIN_SAVE",payload:{id:l,boardId:e,title:i,url:n,localPinId:a}}}function d(l){return{type:"PIN_UNSAVE",payload:{id:l}}}function o(l){return{type:"PIN_SHOW_SUGGESTED_CREATOR_RECS",payload:{id:l,value:!0}}}function r({id:l,text:e,undoAction:i,undoActionOptions:n,undoText:a}){return{type:"PIN_SHOW_UNDO_AND_FEEDBACK",payload:{id:l,value:!0,text:e,undoAction:i,undoActionOptions:n,undoText:a}}}function u(l){return{type:"PIN_SHOW_FEEDBACK",payload:{id:l,value:!1}}}function s(l,e){return{type:"PIN_SHOW_FEEDBACK",payload:{id:l,value:!0,text:e}}}function p(l){return{type:"PIN_SHOW_FEEDBACK_OVERLAY",payload:{id:l,value:!0}}}function _(l){return{type:"PIN_SHOW_FEEDBACK_OVERLAY",payload:{id:l,value:!1}}}function c(l){return{type:"PIN_SHOW_AD_REASONS_MODAL",payload:{id:l,value:!0}}}function g(l){return{payload:{id:l,value:!1},type:"PIN_SHOW_AD_REASONS_MODAL"}}i.d(e,{Gb:()=>d,I1:()=>u,Ib:()=>p,NA:()=>r,Ur:()=>t,Vw:()=>o,b9:()=>c,i0:()=>_,mO:()=>a,q1:()=>s,yR:()=>n,yj:()=>g})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/56725-25e99942492e7de4.mjs.map