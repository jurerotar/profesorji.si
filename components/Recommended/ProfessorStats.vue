<template>
    <div class = "professorStats">
        <div class = "professorStats__row">
            <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="professorStats__icon professorStats__icon--star">
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
            </svg>
            <span class = "professorStats__number">{{professorStats.grade}}</span>
        </div>
        <div class = "professorStats__row">
        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="professorStats__icon professorStats__icon--comment">
            <path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"></path>
        </svg>
            <span class = "professorStats__number">{{professorStats.numberOfComments}}</span>
        </div>
        <div class = "professorStats__row">
            <svg class = "professorStats__icon professorStats__icon--hashtag" width = "20" height = "20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
                <path d="M443.524 190.109l4.286-24c1.313-7.355-4.342-14.109-11.813-14.109h-89.045l18.909-105.89c1.313-7.355-4.342-14.11-11.813-14.11h-24.38a12 12 0 0 0-11.813 9.89L298.192 152h-111.24l18.909-105.89c1.313-7.355-4.342-14.11-11.813-14.11h-24.38a12 12 0 0 0-11.813 9.89L138.192 152H44.86a12 12 0 0 0-11.813 9.891l-4.286 24C27.448 193.246 33.103 200 40.575 200h89.045l-20 112H16.289a12 12 0 0 0-11.813 9.891l-4.286 24C-1.123 353.246 4.532 360 12.003 360h89.045L82.139 465.891C80.826 473.246 86.481 480 93.953 480h24.38a12 12 0 0 0 11.813-9.891L149.808 360h111.24l-18.909 105.891c-1.313 7.355 4.342 14.109 11.813 14.109h24.38a12 12 0 0 0 11.813-9.891L309.808 360h93.331a12 12 0 0 0 11.813-9.891l4.286-24c1.313-7.355-4.342-14.109-11.813-14.109H318.38l20-112h93.331a12 12 0 0 0 11.813-9.891zM269.62 312H158.38l20-112h111.24l-20 112z"></path>
            </svg>
            <span class = "professorStats__number">{{professorStats.numberOfGrades}}</span>
        </div>
    </div>
</template>


<script>
export default {
    props: ['professorStats']
}
</script>


<style lang="scss">
@import "~/assets/scss/_variables.scss";

.professorStats {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    &__row {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 1.5rem;
    }
    &__icon {
        &--star {
            & path {
                fill: gold;
            }
        }
        &--hashtag {
            fill: white;
        }
        &--comment {
            fill: var(--color-primary);
        }
    }
    &__number {
        color: white;
        font-size: 1.5rem;
        margin-left: .5rem;
    }
}
</style>
