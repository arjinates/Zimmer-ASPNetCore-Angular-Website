"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[534],{9534:(D,m,r)=>{r.r(m),r.d(m,{ShopModule:()=>G});var c=r(6895),x=r(4466);class g{constructor(){this.brandId=0,this.typeId=0,this.sort="name",this.pageNumber=1,this.pageSize=6,this.search=""}}var t=r(1571),_=r(529),u=r(9646),l=r(4004),C=r(2340);let f=(()=>{class n{constructor(e){this.http=e,this.baseUrl=C.N.apiUrl,this.products=[],this.brands=[],this.types=[],this.shopParams=new g,this.productCache=new Map}getProducts(e=!0){if(e||(this.productCache=new Map),this.productCache.size>0&&e&&this.productCache.has(Object.values(this.shopParams).join("-"))&&(this.pagination=this.productCache.get(Object.values(this.shopParams).join("-")),this.pagination))return(0,u.of)(this.pagination);let o=new _.LE;return this.shopParams.brandId>0&&(o=o.append("brandId",this.shopParams.brandId)),this.shopParams.typeId&&(o=o.append("typeId",this.shopParams.typeId)),o=o.append("sort",this.shopParams.sort),o=o.append("pageIndex",this.shopParams.pageNumber),o=o.append("pageSize",this.shopParams.pageSize),this.shopParams.search&&(o=o.append("search",this.shopParams.search)),this.http.get(this.baseUrl+"products",{params:o}).pipe((0,l.U)(i=>(this.productCache.set(Object.values(this.shopParams).join("-"),i),this.pagination=i,i)))}setShopParams(e){this.shopParams=e}getShopParams(){return this.shopParams}getProduct(e){const o=[...this.productCache.values()].reduce((i,a)=>({...i,...a.data.find(p=>p.id===e)}),{});return 0!==Object.keys(o).length?(0,u.of)(o):this.http.get(this.baseUrl+"products/"+e)}getBrands(){return this.brands.length>0?(0,u.of)(this.brands):this.http.get(this.baseUrl+"products/brands").pipe((0,l.U)(e=>this.brands=e))}getTypes(){return this.types.length>0?(0,u.of)(this.types):this.http.get(this.baseUrl+"products/types").pipe((0,l.U)(e=>this.types=e))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(_.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function b(n,s){if(1&n&&(t.TgZ(0,"span"),t._uU(1,"Showing "),t.TgZ(2,"strong"),t._uU(3),t.qZA(),t._uU(4," of"),t.TgZ(5,"strong"),t._uU(6),t.qZA(),t._uU(7," Results"),t.qZA()),2&n){const e=t.oxw(2);t.xp6(3),t.AsE(" ",(e.pageNumber-1)*e.pageSize+1," - ",e.pageNumber*e.pageSize>e.totalCount?e.totalCount:e.pageNumber*e.pageSize," "),t.xp6(3),t.hij(" ",e.totalCount,"")}}function P(n,s){if(1&n&&(t.TgZ(0,"header"),t.YNc(1,b,8,3,"span",0),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.totalCount>0)}}let S=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-paging-header"]],inputs:{pageNumber:"pageNumber",pageSize:"pageSize",totalCount:"totalCount"},decls:1,vars:1,consts:[[4,"ngIf"]],template:function(e,o){1&e&&t.YNc(0,P,2,1,"header",0),2&e&&t.Q6J("ngIf",o.totalCount&&o.pageSize&&o.pageNumber)},dependencies:[c.O5]}),n})();var y=r(2521),h=r(433);function T(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"pagination",1),t.NdJ("pageChanged",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.onPagerChanged(i))}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("boundaryLinks",!0)("totalItems",e.totalCount)("itemsPerPage",e.pageSize)("maxSize",10)("ngModel",e.pageNumber)}}let Z=(()=>{class n{constructor(){this.pageChanged=new t.vpe}onPagerChanged(e){this.pageChanged.emit(e.page)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-pager"]],inputs:{totalCount:"totalCount",pageSize:"pageSize",pageNumber:"pageNumber"},outputs:{pageChanged:"pageChanged"},decls:1,vars:1,consts:[["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","itemsPerPage","maxSize","ngModel","pageChanged",4,"ngIf"],["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","itemsPerPage","maxSize","ngModel","pageChanged"]],template:function(e,o){1&e&&t.YNc(0,T,1,5,"pagination",0),2&e&&t.Q6J("ngIf",o.totalCount&&o.pageSize)},dependencies:[c.O5,y.Qt,h.JJ,h.On]}),n})();var v=r(3473),d=r(9838);function k(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",1)(1,"div",2),t._UZ(2,"img",3),t.TgZ(3,"div",4)(4,"button",5),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.addItemToBasket())}),t._UZ(5,"i",6),t.qZA(),t.TgZ(6,"button",7),t._uU(7,"View"),t.qZA()()(),t.TgZ(8,"div",8)(9,"a",9)(10,"h6",10),t._uU(11),t.qZA()(),t.TgZ(12,"span",11),t._uU(13),t.ALo(14,"currency"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(2),t.s9C("src",e.product.pictureUrl,t.LSH),t.s9C("alt",e.product.name),t.xp6(4),t.MGl("routerLink","/shop/",e.product.id,""),t.xp6(5),t.hij(" ",e.product.name," "),t.xp6(2),t.Oqu(t.lcZ(14,5,e.product.price))}}let I=(()=>{class n{constructor(e){this.basketService=e}addItemToBasket(){this.product&&this.basketService.addItemToBasket(this.product)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(v.v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product-item"]],inputs:{product:"product"},decls:1,vars:1,consts:[["class","card h-100 shadow-sm",4,"ngIf"],[1,"card","h-100","shadow-sm"],[1,"image","position-relative",2,"cursor","pointer"],[1,"img-fluid","bg-light",3,"src","alt"],[1,"d-flex","align-items-center","justify-content-center","hover-overlay"],[1,"btn","btn-primary",3,"click"],[1,"fa","fa-shopping-cart","me-2"],[1,"btn","btn-primary",3,"routerLink"],[1,"card-body","d-flex","flex-column"],["href","",1,"text-decoration-none"],[1,"text-uppercase"],[1,"mb-2"]],template:function(e,o){1&e&&t.YNc(0,k,15,7,"div",0),2&e&&t.Q6J("ngIf",o.product)},dependencies:[c.O5,d.rH,c.H9],styles:[".btn[_ngcontent-%COMP%]{width:35%;height:40px;margin-inline-start:5px}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{opacity:1}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{transform:none;opacity:1}.hover-overlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;background:rgba(255,255,255,.5);opacity:0;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:1000;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{transform:translate(-20px)}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type{transform:translate(20px)}"]}),n})();const q=["search"];function A(n,s){if(1&n&&(t.TgZ(0,"option",21),t._uU(1),t.qZA()),2&n){const e=s.$implicit,o=t.oxw(2);t.Q6J("selected",o.shopParams.sort===e.value)("value",e.value),t.xp6(1),t.hij(" ",e.name," ")}}function N(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"li",22),t.NdJ("click",function(){const a=t.CHM(e).$implicit,p=t.oxw(2);return t.KtG(p.onBrandSelected(a.id))}),t._uU(1),t.qZA()}if(2&n){const e=s.$implicit,o=t.oxw(2);t.ekj("active",e.id===o.shopParams.brandId),t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}function w(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"li",22),t.NdJ("click",function(){const a=t.CHM(e).$implicit,p=t.oxw(2);return t.KtG(p.onTypeSelected(a.id))}),t._uU(1),t.qZA()}if(2&n){const e=s.$implicit,o=t.oxw(2);t.ekj("active",e.id===o.shopParams.typeId),t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}function O(n,s){1&n&&(t.TgZ(0,"span"),t._uU(1,"There are "),t.TgZ(2,"strong"),t._uU(3,"0"),t.qZA(),t._uU(4," results that for this filter."),t.qZA())}function M(n,s){if(1&n&&(t.TgZ(0,"div",23),t._UZ(1,"app-product-item",24),t.qZA()),2&n){const e=s.$implicit;t.xp6(1),t.Q6J("product",e)}}function U(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",25)(1,"app-pager",26),t.NdJ("pageChanged",function(i){t.CHM(e);const a=t.oxw(2);return t.KtG(a.onPageChanged(i))}),t.qZA()()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("totalCount",e.totalCount)("pageSize",e.shopParams.pageSize)("pageNumber",e.shopParams.pageNumber)}}function J(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",2)(1,"section",3)(2,"h5",4),t._uU(3,"Sort"),t.qZA(),t.TgZ(4,"select",5),t.NdJ("change",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.onSortSelected(i))}),t.YNc(5,A,2,3,"option",6),t.qZA(),t.TgZ(6,"h5",4),t._uU(7,"Brands"),t.qZA(),t.TgZ(8,"ul",7),t.YNc(9,N,2,4,"li",8),t.qZA(),t.TgZ(10,"h5",4),t._uU(11,"Types"),t.qZA(),t.TgZ(12,"ul",7),t.YNc(13,w,2,4,"li",8),t.qZA()(),t.TgZ(14,"section",9)(15,"div",10),t._UZ(16,"app-paging-header",11),t.TgZ(17,"header"),t.YNc(18,O,5,0,"span",12),t.qZA(),t.TgZ(19,"div",13)(20,"input",14,15),t.NdJ("keyup.enter",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onSearch())}),t.qZA(),t.TgZ(22,"button",16),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onSearch())}),t._uU(23,"Search"),t.qZA(),t.TgZ(24,"button",17),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onReset())}),t._uU(25,"Reset"),t.qZA()()(),t.TgZ(26,"div",18),t.YNc(27,M,2,1,"div",19),t.qZA(),t.YNc(28,U,2,3,"div",20),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(5),t.Q6J("ngForOf",e.sortOptions),t.xp6(4),t.Q6J("ngForOf",e.brands),t.xp6(4),t.Q6J("ngForOf",e.types),t.xp6(3),t.Q6J("totalCount",e.totalCount)("pageNumber",e.shopParams.pageNumber)("pageSize",e.shopParams.pageSize),t.xp6(2),t.Q6J("ngIf",0===e.totalCount),t.xp6(9),t.Q6J("ngForOf",e.products),t.xp6(1),t.Q6J("ngIf",e.totalCount>0)}}let B=(()=>{class n{constructor(e){this.shopService=e,this.products=[],this.brands=[],this.types=[],this.sortOptions=[{name:"Alphabetical",value:"name"},{name:"Price: Low to high",value:"priceAsc"},{name:"Price: High to low",value:"priceDesc"}],this.totalCount=0,this.shopParams=e.getShopParams()}ngOnInit(){this.getProducts(),this.getBrands(),this.getTypes()}getProducts(){this.shopService.getProducts().subscribe({next:e=>{this.products=e.data,this.totalCount=e.count},error:e=>console.log(e)})}getBrands(){this.shopService.getBrands().subscribe({next:e=>this.brands=[{id:0,name:"All"},...e],error:e=>console.log(e)})}getTypes(){this.shopService.getTypes().subscribe({next:e=>this.types=[{id:0,name:"All"},...e],error:e=>console.log(e)})}onBrandSelected(e){const o=this.shopService.getShopParams();o.brandId=e,o.pageNumber=1,this.shopService.setShopParams(o),this.shopParams=o,this.getProducts()}onTypeSelected(e){const o=this.shopService.getShopParams();o.typeId=e,o.pageNumber=1,this.shopService.setShopParams(o),this.shopParams=o,this.getProducts()}onSortSelected(e){const o=this.shopService.getShopParams();o.sort=e.target.value,this.shopService.setShopParams(o),this.shopParams=o,this.getProducts()}onPageChanged(e){const o=this.shopService.getShopParams();o.pageNumber!==e&&(o.pageNumber=e,this.shopService.setShopParams(o),this.shopParams=o,this.getProducts())}onSearch(){const e=this.shopService.getShopParams();e.search=this.searchTerm?.nativeElement.value,e.pageNumber=1,this.shopService.setShopParams(e),this.shopParams=e,this.getProducts()}onReset(){this.searchTerm&&(this.searchTerm.nativeElement.value=""),this.shopParams=new g,this.shopService.setShopParams(this.shopParams),this.getProducts()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-shop"]],viewQuery:function(e,o){if(1&e&&t.Gf(q,5),2&e){let i;t.iGM(i=t.CRH())&&(o.searchTerm=i.first)}},decls:2,vars:1,consts:[[1,"container"],["class","row",4,"ngIf"],[1,"row"],[1,"col-3"],[1,"text-warning","ms-3"],[1,"form-select","mb-4",3,"change"],[3,"selected","value",4,"ngFor","ngForOf"],[1,"list-group","my-3"],["class","list-group-item",3,"active","value","click",4,"ngFor","ngForOf"],[1,"col-9"],[1,"d-flex","justify-content-between","align-items-center","pb-2"],[3,"totalCount","pageNumber","pageSize"],[4,"ngIf"],[1,"d-flex","mt-2"],["type","text","placeholder","Search",1,"form-control","me-2",3,"keyup.enter"],["search",""],[1,"btn","btn-outline-primary","mx-2",3,"click"],[1,"btn","btn-outline-success",3,"click"],[1,"row","row-cols-3","g-3","mb-4"],["class","col",4,"ngFor","ngForOf"],["class","d-flex justify-content-center",4,"ngIf"],[3,"selected","value"],[1,"list-group-item",3,"value","click"],[1,"col"],[3,"product"],[1,"d-flex","justify-content-center"],[3,"totalCount","pageSize","pageNumber","pageChanged"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,J,29,9,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",o.types.length>0&&o.brands.length>0))},dependencies:[c.sg,c.O5,S,Z,h.YN,h.Kr,I],styles:[".list-group-item[_ngcontent-%COMP%]{cursor:pointer;border:none;padding:10px 20px;font-size:1.1em}.list-group-item.active[_ngcontent-%COMP%]{border-radius:10px}.list-group-item[_ngcontent-%COMP%]:not(.active):hover{color:#fff;background-color:#0d6efdb3;border-radius:10px}"]}),n})();var z=r(5698),Q=r(8909);function F(n,s){if(1&n&&(t.TgZ(0,"h5",14),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij(" You have ",e.quantityInBasket," of this item in your basket ")}}function H(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",3),t._UZ(2,"img",4),t.qZA(),t.TgZ(3,"div",5)(4,"h2"),t._uU(5),t.qZA(),t.TgZ(6,"p",6),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.YNc(9,F,2,1,"h5",7),t.TgZ(10,"div",8)(11,"i",9),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.decrementQuantity())}),t.qZA(),t.TgZ(12,"span",10),t._uU(13),t.qZA(),t.TgZ(14,"i",11),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.incrementQuantity())}),t.qZA(),t.TgZ(15,"button",12),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.updateBasket())}),t._uU(16),t.qZA()(),t.TgZ(17,"div",13)(18,"h4"),t._uU(19,"Description"),t.qZA(),t.TgZ(20,"p"),t._uU(21),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(2),t.s9C("src",e.product.pictureUrl,t.LSH),t.xp6(3),t.Oqu(e.product.name),t.xp6(2),t.Oqu(t.lcZ(8,8,e.product.price)),t.xp6(2),t.Q6J("ngIf",e.quantityInBasket>0),t.xp6(4),t.hij(" ",e.quantity,""),t.xp6(2),t.Q6J("disabled",e.quantity===e.quantityInBasket),t.xp6(1),t.Oqu(e.buttonText),t.xp6(5),t.Oqu(e.product.description)}}const Y=[{path:"",component:B},{path:":id",component:(()=>{class n{constructor(e,o,i,a){this.shopService=e,this.activatedRoute=o,this.bcService=i,this.basketService=a,this.quantity=1,this.quantityInBasket=0,this.bcService.set("@productDetails"," ")}ngOnInit(){this.loadProduct()}loadProduct(){const e=this.activatedRoute.snapshot.paramMap.get("id");e&&this.shopService.getProduct(+e).subscribe({next:o=>{this.product=o,this.bcService.set("@productDetails",o.name),this.basketService.basketSource$.pipe((0,z.q)(1)).subscribe({next:i=>{const a=i?.items.find(p=>p.id=+e);a&&(this.quantity=a.quantity,this.quantityInBasket=a.quantity)}})},error:o=>console.log(o)})}incrementQuantity(){this.quantity++}decrementQuantity(){this.quantity--}updateBasket(){if(this.product)if(this.quantity>this.quantityInBasket){const e=this.quantity-this.quantityInBasket;this.quantityInBasket+=e,this.basketService.addItemToBasket(this.product,e)}else{const e=this.quantityInBasket-this.quantity;this.quantityInBasket-=e,this.basketService.removeItemFromBasket(this.product.id,e)}}get buttonText(){return 0===this.quantityInBasket?"Add to basket":"Update basket"}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f),t.Y36(d.gz),t.Y36(Q.pm),t.Y36(v.v))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product-details"]],decls:2,vars:1,consts:[[1,"container"],["class","row",4,"ngIf"],[1,"row"],[1,"col-6"],["alt","product.name",1,"w-100",3,"src"],[1,"col-6","mt-5"],[2,"font-size","2em"],["class","text-danger mb-3",4,"ngIf"],[1,"d-flex","justify-content-start-start","align-items-center"],[1,"fa","fa-minus-circle","text-warning","me-2",2,"cursor","pointer","font-size","1.5em",3,"click"],[1,"font-weight-bold",2,"font-size","1.5em"],[1,"fa","fa-plus-circle","text-warning","ms-2",2,"cursor","pointer","font-size","1.5em",3,"click"],[1,"btn","btn-outline-danger","ms-4",3,"disabled","click"],[1,"row","mt-4"],[1,"text-danger","mb-3"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,H,22,10,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",o.product))},dependencies:[c.O5,c.H9]}),n})(),data:{breadcrumb:{alias:"productDetails"}}}];let j=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(Y),d.Bz]}),n})(),G=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,x.m,j]}),n})()}}]);