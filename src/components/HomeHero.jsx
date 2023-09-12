import figma from "../assets/figma.png"
import swift from "../assets/swift.png"
import react from "../assets/react.png"
import css from "../assets/css.png"
import html from "../assets/html.png"

import ts from "../assets/typescript.png"
import firebase from "../assets/firebase.png"
import ruby from "../assets/ruby.png"
import flutter from "../assets/flutter.png"
import golang from "../assets/golang.png"

import java from "../assets/java.png"
import python from "../assets/python.png"
import js from "../assets/javascript.png"
import c from "../assets/c-original.png"
import kotlin from "../assets/kotlin.png"

import sass from "../assets/sass.png"
import tailwind from "../assets/tailwind.png"
import bootstrap from "../assets/bootstrap.png"
import androidStudio from "../assets/android-studio.png"
import git from "../assets/git.png"

import angular from "../assets/angular.png"
import vue from "../assets/vue.png"
import php from "../assets/php.png"
import node from "../assets/nodejs.png"
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
                    <span className="unique">A Unique Way</span> to Learn Programming
                </div>
                <p className="text">Jcode is a platform that help you enhance your skills in programming and help you to get your dream job</p>
            </div>
        </header>
    )
}