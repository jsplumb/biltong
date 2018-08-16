declare namespace Biltong {
    /**
     * Represents an x,y location.
     */
    type Point = {
        x: number;
        y: number;
    };
    /**
     * Represents an x,y location as an array.
     */
    type PointArray = [number, number];
    /**
     * Represents a line consisting of two points
     */
    type Line = [Point, Point];
    /**
     * Represents a rectangle, consisting of x,y and w,h.
     */
    type Rectangle = {
        x: number;
        y: number;
        w: number;
        h: number;
    };
    /**
     * Represents the quadrant of the circle in which the angle between two points lies.
     */
    type Quadrant = 1 | 2 | 3 | 4;
    /**
     * Convenience type allowing various methods to take either an object or
     * an array representing a point.
     */
    type PointRepresentation = Point | PointArray;
    /**
     * @method Biltong.gradient
     * @desc Calculates the gradient of a line between the two points.
     * @param {Point} p1 First point, either as a 2 entry array or object with `left` and `top` properties.
     * @param {Point} p2 Second point, either as a 2 entry array or object with `left` and `top` properties.
     * @return {number} The gradient of a line between the two points.
     */
    function gradient(p1: PointRepresentation, p2: PointRepresentation): number;
    /**
     * @method Biltong.normal
     * @desc Calculates the gradient of a normal to a line between the two points.
     * @param {Point} p1 First point, either as a 2 entry array or object with `left` and `top` properties.
     * @param {Point} p2 Second point, either as a 2 entry array or object with `left` and `top` properties.
     * @return {number} The gradient of a normal to a line between the two points.
     */
    function normal(p1: PointRepresentation, p2: PointRepresentation): number;
    /**
     * @method Biltong.lineLength
     * @desc Calculates the length of a line between the two points.
     * @param {Point} p1 First point, either as a 2 entry array or object with `left` and `top` properties.
     * @param {Point} p2 Second point, either as a 2 entry array or object with `left` and `top` properties.
     * @return {number} The length of a line between the two points.
     */
    function lineLength(p1: PointRepresentation, p2: PointRepresentation): number;
    /**
     * @method Biltong.quadrant
     * @desc Calculates the quadrant in which the angle between the two points lies.
     * @param {Point} p1 First point, either as a 2 entry array or object with `left` and `top` properties.
     * @param {Point} p2 Second point, either as a 2 entry array or object with `left` and `top` properties.
     * @return {Quadrant} The quadrant - 1 for upper right, 2 for lower right, 3 for lower left, 4 for upper left.
     */
    function quadrant(p1: PointRepresentation, p2: PointRepresentation): Quadrant;
    /**
     * @method Biltong.theta
     * @desc Calculates the angle between the two points.
     * @param {Point} p1 First point, either as a 2 entry array or object with `left` and `top` properties.
     * @param {Point} p2 Second point, either as a 2 entry array or object with `left` and `top` properties.
     * @return {number} The angle between the two points.
     */
    function theta(p1: PointRepresentation, p2: PointRepresentation): number;
    /**
     * @method Biltong.intersects
     * @desc Calculates whether or not the two rectangles intersect.
     * @param {Rectangle} r1 First rectangle, as a js object in the form `{x:.., y:.., w:.., h:..}`
     * @param {Rectangle} r2 Second rectangle, as a js object in the form `{x:.., y:.., w:.., h:..}`
     * @return {Boolean} True if the rectangles intersect, false otherwise.
     */
    function intersects(r1: Rectangle, r2: Rectangle): boolean;
    /**
     * @method Biltong.encloses
     * @desc Calculates whether or not r2 is completely enclosed by r1.
     * @param {Rectangle} r1 First rectangle, as a js object in the form `{x:.., y:.., w:.., h:..}`
     * @param {Rectangle} r2 Second rectangle, as a js object in the form `{x:.., y:.., w:.., h:..}`
     * @param {Boolean} [allowSharedEdges=false] If true, the concept of enclosure allows for one or more edges to be shared by the two rectangles.
     * @return {Boolean} True if r1 encloses r2, false otherwise.
     */
    function encloses(r1: Rectangle, r2: Rectangle, allowSharedEdges?: boolean): boolean;
    /**
     * @method Biltong.pointOnLine
     * @desc Calculates a point on the line from `fromPoint` to `toPoint` that is `distance` units along the length of the line.
     * @param {Point} fromPoint First point, either as an object with `left` and `top` properties.
     * @param {Point} toPoint Second point, either as an object with `left` and `top` properties.
     * @param {number} distance The distance to travel along the line.
     * @return {Point} Point on the line, in the form `{ x:..., y:... }`.
     */
    function pointOnLine(fromPoint: Point, toPoint: Point, distance: number): Point;
    /**
     * @method Biltong.perpendicularLineTo
     * @desc Calculates a line of length `length` that is perpendicular to the line from `fromPoint` to `toPoint` and passes through `toPoint`.
     * @param {Point} fromPoint First point, either as an object with `left` and `top` properties.
     * @param {Point} toPoint Second point, either as an object with `left` and `top` properties.
     * @param {number} length The length of the line to create.
     * @return {Line} Perpendicular line, in the form `[ { x:..., y:... }, { x:..., y:... } ]`.
     */
    function perpendicularLineTo(fromPoint: Point, toPoint: Point, length: number): Line;
}
