import css from "../assets/css.png"
import figma from "../assets/figma.png"
import html from "../assets/html.png"
import react from "../assets/react.png"
import swift from "../assets/swift.png"

import firebase from "../assets/firebase.png"
import flutter from "../assets/flutter.png"
import golang from "../assets/golang.png"
import ruby from "../assets/ruby.png"
import ts from "../assets/typescript.png"

import c from "../assets/c-original.png"
import java from "../assets/java.png"
import js from "../assets/javascript.png"
import kotlin from "../assets/kotlin.png"
import python from "../assets/python.png"

import androidStudio from "../assets/android-studio.png"
import bootstrap from "../assets/bootstrap.png"
import git from "../assets/git.png"
import sass from "../assets/sass.png"
import tailwind from "../assets/tailwind.png"

import angular from "../assets/angular.png"
import node from "../assets/nodejs.png"
import php from "../assets/php.png"
import vue from "../assets/vue.png"
import webpack from "../assets/webpack.png"

export default function HomeHero(){
    return (
        <header className="hero">
            <div className="items">
                <div className="row">
                    <img src={figma} alt="Figma" />
                    <img src={swift} alt="Swift" />
                    <img src={react} alt="ReactJS" />
                    <img src={css} alt="CSS" />
                    <img src={html} alt="HTML" />
                </div>
                <div className="row">
                    <img src={ts} alt="Typescript" />
                    <img src={firebase} alt="Firebase" />
                    <img src={ruby} alt="Ruby" />
                    <img src={flutter} alt="Flutter" />
                    <img src={golang} alt="Golang" />
                </div>
                <div className="row">
                    <img src={java} alt="Java" />
                    <img src={python} alt="Python" />
                    <img src={js} alt="JavaScript" />
                    <img src={c} alt="C" />
                    <img src={kotlin} alt="Kotlin" />
                </div>
                <div className="row">
                    <img src={sass} alt="SASS" />
                    <img src={tailwind} alt="Tailwind" />
                    <img src={bootstrap} alt="Bootstrap" />
                    <img src={androidStudio} alt="Android Studio" />
                    <img src={git} alt="Git" />
                </div>
                <div className="row">
                    <img src={angular} alt="Angular" />
                    <img src={vue} alt="Vue" />
                    <img src={php} alt="PHP" />
                    <img src={node} alt="NodeJS" />
                    <img src={webpack} alt="Webpack" />
                </div>
            </div>
            <div className="info">
                <div className="tagline">
                    <span className="unique">Cara Unik</span> Belajar Programming
                </div>
                <p className="text">Jcode adalah platform yang akan membantumu meningkatkan skil programming untuk mendapatkan karir impian</p>
            </div>
        </header>
    )
}