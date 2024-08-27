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
    width?: number = 0;
    height?: number = 0;
    x?: number = 0;
    y?: number = 0;
    widthUnit?: string = '%';
    heightUnit?: string = '%';
    xUnit?: string = '%';
    yUnit?: string = '%';
}