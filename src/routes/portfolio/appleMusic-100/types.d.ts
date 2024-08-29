interface SongData {
    song: string;
    artist: string;
    this_week: number;
    last_week: number | null;
    peak_position: number;
    weeks_on_chart: number;
    imageUrl?: string;
    color?: string;
}

interface DimensionData {
    width?: string;
    height?: string;
    scale?: number;
    left?: string;
    top?: string;
    translate?: string;
    skewY?: string;
    rotateY?: string;
    zIndex: number;
    cssClass?: string;
}