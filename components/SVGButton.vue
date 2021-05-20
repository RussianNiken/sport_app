<template>
    <div @click="onClick()" class="grid justify-items-center SVGButton" :style="css">
        <slot></slot>
        <p>{{text}}</p>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        current: {
            type: Number,
            required: true,
        },
        i: {
            type: Number,
            required: true,
        }
    },
    computed:
    {
        active() {
            return this.current == this.i;  
        },
        css() {
            if ( this.active )
                return '--c: #FAFAFA';
            else
                return '--c: #9E95DF';
        }
    },
    methods:
    {
        onClick( ) 
        {
            this.$emit('change', this.i);
        }
    },
    mounted( ) 
    {
        if( this.active ) this.onClick();
    }
}
</script>

<style>

.SVGButton {
    transition: transform .2s ease-in-out;
}

.SVGButton:active
{
    transform: scale(.9,.9);
}

.SVGButton *
{
    fill: var(--c);
    color: var(--c);
}

</style>