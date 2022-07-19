import {css, html, LitElement} from "lit";
import {variables} from "./utils/variables";
import {colors} from "./utils/colors";

const buttonStyle = css`
  button {
    display: inline-block;
    text-align: center;
    text-decoration: none;
    border: none;
    appearance: none;
    font-family: "proxima-nova", Helvetica, Arial, sans-serif;
    letter-spacing: 0.6px;
    background-color: initial;
    transition: all .35s ease;
  }
`

export class DpButton extends LitElement {
    // No permite extrapolar variables
    static styles = [buttonStyle]
    //TODO: recibir una propiedad para renderizar el color y el tamaño
    static properties = {
        color: {
            type: String
        },
        size: {
            type: String
        },
        type: {
            type: String
        }
    };

    constructor() {
        super();
        this.color = "green"
        this.type = "primary"
    }

    render() {
        const sizeClass = this.size === "sm" ? "sm"
            : this.size === "lg" ? "lg"
                : "md";

        const prefixType = this.type === "secondary" ? "secondary"
            : this.type === "link" ? "link"
                : "primary";

        const suffixColor = this.color === "grey" ? "grey"
            : this.color === "brown" ? "brown"
                : "green";

        const typeClass = `${prefixType}-${suffixColor}`

        return html`
            <!-- Permite extrapolar variables-->
            <style>
                button {
                    border-radius: ${variables.borderRadius};
                    font-weight: ${variables.textBold};
                    color: ${colors.white};
                }

                button:hover {
                    color: ${colors.white};
                }

                .link-green {
                    color: ${colors.green};
                    font-weight: ${variables.textNormal};
                }

                .link-green:hover {
                    color: ${colors.darkgreen};
                }

                .primary-green {
                    background-color: ${colors.green};
                }

                .primary-green:hover {
                    background-color: ${colors.darkgreen};
                }

                .primary-grey {
                    background-color: ${colors.grey};
                }

                .primary-grey:hover {
                    background-color: ${colors.darkgrey};
                }

                .primary-brown {
                    background-color: ${colors.brown};
                }

                .primary-brown:hover {
                    background-color: ${colors.brownHover};
                }

                .secondary-green {
                    background: transparent;
                    box-shadow: inset 0 0 0 1px ${colors.green};
                    font-weight: ${variables.textNormal};
                    color: ${colors.green};
                }

                .secondary-green:hover {
                    background: ${colors.greenBrightness};
                }

                .secondary-brown {
                    background: transparent;
                    box-shadow: inset 0 0 0 1px ${colors.brown};
                    font-weight: ${variables.textNormal};
                    color: ${colors.brown};
                }

                .sm {
                    font-size: ${variables.sizing_lvl1};
                    line-height: 11px;
                    padding: 10px 15px;
                }

                .md {
                    font-size: ${variables.sizing_lvl2};
                    line-height: 13px;
                    padding: 13px 25px;
                }

                .lg {
                    font-size: ${variables.sizing_lvl3};
                    line-height: 15px;
                    padding: 16px 35px;
                }
            </style>
            <button class="${sizeClass} ${typeClass}">
                <slot></slot>
            </button>
        `
    }
}
