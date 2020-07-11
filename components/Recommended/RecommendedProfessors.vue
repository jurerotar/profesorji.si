<template>
    <nav class = "recommendedProfessorsContainer">
        <h3 class = "recommendedProfessorsContainer__header">Predlagano zate</h3>
        <nuxt-link class = "recommendedProfessorsContainer__link" v-for="professor in professors" :key="professor.id" :to = "professor.url">
            <div class = "recommendedProfessorsContainer__professorCard">
                <div class = "recommendedProfessorsContainer__imageContainer">
                    <img :src = "'/img/professors/' + ((professor.image !== '') ? (professor.sex + professor.image) + '.png' : 'no-profile.png')" width = "60" height = "60" class = "recommendedProfessorsContainer__image" :alt = "professor.name">
                    <div class = "recommendedProfessorsContainer__info">
                        <span class = "recommendedProfessorsContainer__name">{{professor.name}}</span>
                        <span class = "recommendedProfessorsContainer__faculty">{{professor.faculty}}, {{professor.occupation.toLowerCase()}}</span>
                        <span class = "recommendedProfessorsContainer__class">{{professor.class}}</span>
                    </div>
                </div>
                <ProfessorStats v-bind:professorStats = "professor" />
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
                    id: 1,
                    name: 'Janez Novak',
                    sex: 'M',
                    image: '1',
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
                    id: 2,
                    name: 'Janez Novak',
                    sex: 'M',
                    image: '2',
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
                    id: 3,
                    name: 'Jana Novak',
                    sex: 'F',
                    image: '2',
                    title: 'dr',
                    occupation: 'asistent',
                    faculty: 'FE (UNI), UNI-LJ',
                    class: 'Polprevodniška elektronika',
                    numberOfComments: 10,
                    numberOfGrades: 50,
                    grade: 4.9,
                    url: '',
                },
                                {
                    id: 4,
                    name: 'Jana Novak',
                    sex: 'F',
                    image: '4',
                    title: 'dr',
                    occupation: 'asistent',
                    faculty: 'FE (UNI), UNI-LJ',
                    class: 'Polprevodniška elektronika',
                    numberOfComments: 10,
                    numberOfGrades: 50,
                    grade: 4.9,
                    url: '',
                },
                                {
                    id: 5,
                    name: 'Jana Novak',
                    sex: 'F',
                    image: '1',
                    title: 'dr',
                    occupation: 'asistent',
                    faculty: 'FE (UNI), UNI-LJ',
                    class: 'Polprevodniška elektronika',
                    numberOfComments: 10,
                    numberOfGrades: 50,
                    grade: 4.9,
                    url: '',
                },
                                {
                    id: 6,
                    name: 'Jana Novak',
                    sex: 'F',
                    image: '3',
                    title: 'dr',
                    occupation: 'asistent',
                    faculty: 'FE (UNI), UNI-LJ',
                    class: 'Polprevodniška elektronika',
                    numberOfComments: 10,
                    numberOfGrades: 50,
                    grade: 4.9,
                    url: '',
                },
                                {
                    id: 7,
                    name: 'Jana Novak',
                    sex: 'F',
                    image: '2',
                    title: 'dr',
                    occupation: 'asistent',
                    faculty: 'FE (UNI), UNI-LJ',
                    class: 'Polprevodniška elektronika',
                    numberOfComments: 10,
                    numberOfGrades: 50,
                    grade: 4.9,
                    url: '',
                },
                                {
                    id: 8,
                    name: 'Jana Novak',
                    sex: 'F',
                    image: '2',
                    title: 'dr',
                    occupation: 'asistent',
                    faculty: 'FE (UNI), UNI-LJ',
                    class: 'Polprevodniška elektronika',
                    numberOfComments: 10,
                    numberOfGrades: 50,
                    grade: 4.9,
                    url: '',
                },

            ]
        }
    },
    filters: {

    },
    props : ['professorStats']
}
</script>

<style lang = "scss">
@import "~/assets/scss/_variables.scss";

.recommendedProfessorsContainer {
    display: flex;
    flex-direction: column;
    width: 320px;
    max-width: $mobileWideWidth;
    position: fixed;
    right: 0;
    top: 6rem;
    height: calc(100% - 6rem);
    padding: 1rem 1rem 0 1rem;
    background-color: var(--sidebar-background-color);
    overflow: auto;
    @media screen and (max-width: $tabletWidth) {
        position: relative;
        height: auto;
        width: 100%;
    }
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background: var(--color-primary);
    }
    &__header {
        color: white;
        font-size: 2.4rem;
        margin-bottom: 1rem;
    }
    &__link {
        margin-bottom: 1rem;
    }
    &__professorCard {
        padding: 1rem;
        background-color: var(--recommended-professors-background-color);
        border-radius: var(--border-radius-primary);
        display: flex;
        flex-direction: column;
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
        color: white;
    }
    &__name {
        font-size: 1.8rem;
    }
    &__faculty {
        font-size: 1.3rem;
    }
    &__class {
        font-size: 1.3rem;
    }
}
</style>
