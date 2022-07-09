import {html} from "lit";
import {DpButton} from "../src/DpButton";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
    title: 'Example/DpButton',
    // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
        onClick: {action: 'onClick'},
        color: {
            control: {type: 'select'},
            options: ['green', 'grey', 'brown'],
        },
        size: {
            control: {type: 'select'},
            options: ['sm', 'md', 'lg'],
        },
    },
};

customElements.define('dp-button', DpButton);
// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = ({color, label, size}) => html`
    <dp-button color=${color} size=${size}>
        ${label ? label : "Doppler button"}
    </dp-button>`;


export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
    primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary Button',
    type: 'secondary'
};

export const Link = Template.bind({});
Link.args = {
    label: 'Link Button',
    type: 'link'
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
    size: 'sm'
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
    size: 'md'
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
    size: 'lg'
};

export const green = Template.bind({});
green.args = {
    color: 'green'
};

export const grey = Template.bind({});
grey.args = {
    color: 'grey'
};

export const brown = Template.bind({});
brown.args = {
    color: 'brown'
};
