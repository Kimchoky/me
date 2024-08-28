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
    width?: number;
    height?: number;
    scale?: number;
    left?: number;
    top?: number;
    bottom?: number;
    skewY?: number;
    rotateY?: number;
    sizeUnit?: string;
    posUnit?: string;
    zIndex: number;
}