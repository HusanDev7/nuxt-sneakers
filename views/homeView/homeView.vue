<script setup></script>

<template>
    <div class="sneakers__box">
        <div class="sneakers__box-mini">
            <h3 class="sneakers__box-main__text">SUMMER</h3>
            <span class="sneakers__box-circle"></span>
            <h1 class="sneakers__box-main__title">COLLECTIONS</h1>
            <img class="sneakers__box-sneakers" src="@/assets/img/Snickers.png" alt="" />

            <div class="sneakers__box-btns">
                <div class="sneakers__box-btns__btn"><button>Buy now</button></div>
                <div class="sneakers__box-btns__btn-2">
                    <button>Add to cart <img src="@/assets/img/btn-basket.svg" alt="" /></button>
                </div>
            </div>
            <div class="sneakers__box-swipper">
                <button class="sneakers__box-swipper-left"><img src="@/assets/img/left.svg" alt="" /></button>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <button class="sneakers__box-swipper-right"><img src="@/assets/img/right.svg" alt="" /></button>
            </div>
        </div>
        <div class="sneakers__box-colors">
            <span class="sneakers__box-red"></span>
            <span class="sneakers__box-blue"></span>
            <span class="sneakers__box-color"></span>
        </div>
    </div>
</template>
