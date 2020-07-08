<template>
    <nav class = "recommendedProfessorsContainer">
        <nuxt-link v-for="professor in professors" :key="professor.name" :to = "professor.url">
            <div class = "recommendedProfessorsContainer__professorCard">
                <div class = "recommendedProfessorsContainer__imageContainer">
                    <img :src = "'/img/' + ((professor.image !== '') ? professor.image + '.png' : 'no-profile.png')" width = "60" height = "60" class = "recommendedProfessorsContainer__image" :alt = "professor.name">
                    <div class = "recommendedProfessorsContainer__info">
                        <span class = "recommendedProfessorsContainer__name"><span class = "recommendedProfessorsContainer__title">{{professor.title}}</span>. {{professor.name}}</span>
                        <span class = "recommendedProfessorsContainer__faculty">{{professor.faculty}}</span>
                        <span class = "recommendedProfessorsContainer__class">{{professor.class}}</span>
                    </div>
                </div>
                <div class = "recommendedProfessorsContainer__grades">

                </div>
            </div>
        </nuxt-link>
    </nav>
</template>


<script>
export default {
    data() {
        return {
            professors: [
                {
                    name: 'Janez Novak',
                    sex: 'M',
                    image: '',
                    title: 'dr',
                    occupation: 'Redni profesor',
                    faculty: 'FE (UNI), UNI-LJ',
                    class: 'Osnove elektrotehnike',
                    numberOfComments: 10,
                    numberOfGrades: 50,
                    grade: 4.9,
                    url: '',
                },
                {
                    name: 'Janez Novak',
                    sex: 'M',
                    image: '',
                    title: 'dr',
                    occupation: 'Redni profesor',
                    faculty: 'FE (UNI), UNI-LJ',
                    class: 'Osnove elektrotehnike',
                    numberOfComments: 10,
                    numberOfGrades: 50,
                    grade: 4.9,
                    url: '',
                },
            ]
        }
    }
}
</script>

<style lang = "scss">
.recommendedProfessorsContainer {
    display: flex;
    flex-direction: column;
    width: 25vw;
    max-width: 320px;
    position: fixed;
    right: 0;
    top: 6rem;
    height: calc(100% - 6rem);
    padding: 1rem;
    background-color: var(--sidebar-background-color);
    border: 1px solid blue;
    @media screen and (max-width: 768px) {
        position: relative;
        height: auto;
        max-width: unset;
        width: 100%;
    }
    &__professorCard {
        padding: 1rem;
        background-color: var(--recommended-professors-background-color);
        border-radius: var(--border-radius-primary);
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
    }
    &__imageContainer {
        display: flex;
        flex-direction: row;
    }
    &__image {
        border-radius: 50%;
    }
    &__info {
        display: flex;
        flex-direction: column;
        margin-left: 1.5rem;
    }
    &__name {
        font-size: 1.6rem;
    }
}
</style>
