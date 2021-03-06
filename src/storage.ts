import { CharacterOptions } from "./characters"

/**  */
export interface Char_Type {
    /** hp */
    hp: number,
    /** Скорость */
    speed: number;
    /** Спрайт */
    sprite?: Sprite;
    /** Название */
    name: string;
}
export interface Sprite_Frame {
    // размеры изображения
    dWidth: number;
    dHeight: number;
    // левый верхний угол источника
    sx: number;
    sy: number;
    // размеры вырезаемого фрагмента
    sWidth: number;
    sHeight: number;
}
/** Тип данных для спрайта */
export interface Sprite {
    // путь к спрайту
    url: string,
    standing?: {
        [index:string]: Sprite_Frame;
    }
    move?: {
        [index:string]: {
            // Кадр изображения
            [index:number]: Sprite_Frame
        }
    }
    sprite?: {
        [index:number]: Sprite_Frame;
    }
}
export interface Terrain_Options {
    x: number;
    y: number;
    width?: number;
    height?: number;
    type: string;
}

/** Местности */
export let TERRAINS:{[index:string]:Sprite} = {
    'mario_block': {
        url: 'media/solid/mario_block.png',
        sprite: [
            {
                dWidth: 64,
                dHeight: 64,
                sWidth: 1417,
                sHeight: 1417,
                sx: 0,
                sy: 0
            }
        ]
    }
}
/**  */
export let SPRITES:{[index:string]:Sprite} = {
    'player': {
        url: 'media/sprites/test.png',
        move: {
            right: [
                {
                    dWidth: 30,
                    dHeight: 58,
                    sx: 90,
                    sy: 29,
                    sWidth: 15,
                    sHeight: 29,
                },
                {
                    dWidth: 30,
                    dHeight: 58,
                    sx: 106,
                    sy: 29,
                    sWidth: 15,
                    sHeight: 29,
                },
                {
                    dWidth: 30,
                    dHeight: 58,
                    sx: 124,
                    sy: 29,
                    sWidth: 15,
                    sHeight: 29,
                }
            ],
            left: [
                {
                    dWidth: 30,
                    dHeight: 58,
                    sx: 74,
                    sy: 29,
                    sWidth: 15,
                    sHeight: 29,
                },
                {
                    dWidth: 30,
                    dHeight: 58,
                    sx: 56,
                    sy: 29,
                    sWidth: 15,
                    sHeight: 29,
                },
                {
                    dWidth: 30,
                    dHeight: 58,
                    sx: 40,
                    sy: 29,
                    sWidth: 15,
                    sHeight: 29,
                }
            ]
        },
        standing: {
            right: {
                dWidth: 30,
                dHeight: 58,
                sx: 90,
                sy: 0,
                sWidth: 15,
                sHeight: 29,
            },
            left: {
                dWidth: 30,
                dHeight: 58,
                sx: 75,
                sy: 0,
                sWidth: 15,
                sHeight: 29,
            }
        }
    }
}
/** Стандартные параметры объектов */
export let CHAR_TYPES:{[index:string]:Char_Type} = {
    'player': {
        name: 'player',
        hp: 100,
        speed: 1,
        sprite: SPRITES.player,
    },
    'non-player': {
        name: 'da',
        hp: 100,
        speed: 1,
        sprite: SPRITES.player
    }
}

/** Параметры canvas-объекта */
export interface CanvasObj {
    x: number,
    y: number,
    width: number,
    height: number
}

export interface CanvasText extends Point {
    text: string
}

/** Параметры canvas-кнопок */
export interface CanvasButton {
    param: CanvasObj,
    textParam: CanvasText,
    event?: Function
}

/** Кордината типа (x, y) */
export interface Point {
    x: number,
    y: number
}

export interface LevelJSON {
    floors: CanvasObj[],
    NPC: CharacterOptions
}