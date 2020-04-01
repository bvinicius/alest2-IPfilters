public class Filter {

    private int _first;
    private int _last;

    public Filter(int first, int last) {
        this._first = first;
        this._last = last;
    }

    public int first() {
        return this._first;
    }

    public int last() {
        return this._last;
    }
}