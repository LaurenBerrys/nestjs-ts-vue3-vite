import {
  ef as n,
  eg as w,
  q as v,
  r,
  al as x,
  ae as t,
  af as i,
  a6 as X,
  ai as E,
  eh as j,
  ag as O,
  dd as A,
  dl as d,
  R as Z,
  t as N,
  dm as F,
  bn as ee,
  ei as M,
} from "./index.8fd7165c.js";
const te = n()({
    esriCentimeters: "centimeters",
    esriDecimalDegrees: "decimal-degrees",
    esriDecimeters: "decimeters",
    esriFeet: "feet",
    esriInches: "inches",
    esriKilometers: "kilometers",
    esriMeters: "meters",
    esriMiles: "miles",
    esriMillimeters: "millimeters",
    esriNauticalMiles: "nautical-miles",
    esriPoints: "points",
    esriUnknownUnits: "unknown",
    esriYards: "yards",
  }),
  pe = n()({
    esriNAUCentimeters: "centimeters",
    esriNAUDecimalDegrees: "decimal-degrees",
    esriNAUDecimeters: "decimeters",
    esriNAUFeet: "feet",
    esriNAUInches: "inches",
    esriNAUKilometers: "kilometers",
    esriNAUMeters: "meters",
    esriNAUMiles: "miles",
    esriNAUMillimeters: "millimeters",
    esriNAUNauticalMiles: "nautical-miles",
    esriNAUPoints: "points",
    esriNAUYards: "yards",
  });
n()({
  esriNAUDays: "days",
  esriNAUHours: "hours",
  esriNAUMinutes: "minutes",
  esriNAUSeconds: "seconds",
});
const ue = n()({
    esriNAUCentimeters: "centimeters",
    esriNAUDecimalDegrees: "decimal-degrees",
    esriNAUDecimeters: "decimeters",
    esriNAUFeet: "feet",
    esriNAUInches: "inches",
    esriNAUKilometers: "kilometers",
    esriNAUMeters: "meters",
    esriNAUMiles: "miles",
    esriNAUMillimeters: "millimeters",
    esriNAUNauticalMiles: "nautical-miles",
    esriNAUPoints: "points",
    esriNAUYards: "yards",
    esriNAUDays: "days",
    esriNAUHours: "hours",
    esriNAUMinutes: "minutes",
    esriNAUSeconds: "seconds",
    esriNAUKilometersPerHour: "kilometers-per-hour",
    esriNAUMilesPerHour: "miles-per-hour",
    esriNAUUnknown: "unknown",
  }),
  de = n()({
    esriDOTComplete: "complete",
    esriDOTCompleteNoEvents: "complete-no-events",
    esriDOTFeatureSets: "featuresets",
    esriDOTInstructionsOnly: "instructions-only",
    esriDOTStandard: "standard",
    esriDOTSummaryOnly: "summary-only",
  }),
  me = n()({
    esriNAOutputLineNone: "none",
    esriNAOutputLineStraight: "straight",
    esriNAOutputLineTrueShape: "true-shape",
    esriNAOutputLineTrueShapeWithMeasure: "true-shape-with-measure",
  });
n()({
  esriNAOutputPolygonNone: "none",
  esriNAOutputPolygonSimplified: "simplified",
  esriNAOutputPolygonDetailed: "detailed",
});
const ie = n()({
  esriNFSBAllowBacktrack: "allow-backtrack",
  esriNFSBAtDeadEndsOnly: "at-dead-ends-only",
  esriNFSBNoBacktrack: "no-backtrack",
  esriNFSBAtDeadEndsAndIntersections: "at-dead-ends-and-intersections",
});
n()({
  esriNATravelDirectionFromFacility: "from-facility",
  esriNATravelDirectionToFacility: "to-facility",
}),
  n()({
    esriNATimeOfDayNotUsed: "not-used",
    esriNATimeOfDayUseAsStartTime: "start",
    esriNATimeOfDayUseAsEndTime: "end",
  });
const ae = n()({
    AUTOMOBILE: "automobile",
    TRUCK: "truck",
    WALK: "walk",
    OTHER: "other",
  }),
  c = n()(
    {
      0: "either-side-of-vehicle",
      1: "right-side-of-vehicle",
      2: "left-side-of-vehicle",
      3: "no-u-turn",
    },
    { useNumericKeys: !0 }
  ),
  L = n()({ 0: "stop", 1: "waypoint", 2: "break" }, { useNumericKeys: !0 }),
  C = n()(
    {
      0: "ok",
      1: "not-located",
      2: "network-element-not-located",
      3: "element-not-traversable",
      4: "invalid-field-values",
      5: "not-reached",
      6: "time-window-violation",
      7: "not-located-on-closest",
    },
    { useNumericKeys: !0 }
  ),
  B = n()({ 1: "right", 2: "left" }, { useNumericKeys: !0 }),
  f = n()({ 0: "restriction", 1: "added-cost" }, { useNumericKeys: !0 }),
  W = n()({ 0: "permit", 1: "restrict" }, { useNumericKeys: !0 }),
  J = n()(
    {
      1: "header",
      50: "arrive",
      51: "depart",
      52: "straight",
      100: "on-ferry",
      101: "off-ferry",
      102: "central-fork",
      103: "roundabout",
      104: "u-turn",
      150: "door",
      151: "stairs",
      152: "elevator",
      153: "escalator",
      154: "pedestrian-ramp",
      200: "left-fork",
      201: "left-ramp",
      202: "clockwise-roundabout",
      203: "left-handed-u-turn",
      204: "bear-left",
      205: "left-turn",
      206: "sharp-left",
      207: "left-turn-and-immediate-left-turn",
      208: "left-turn-and-immediate-right-turn",
      300: "right-fork",
      301: "right-ramp",
      302: "counter-clockwise-roundabout",
      303: "right-handed-u-turn",
      304: "bear-right",
      305: "right-turn",
      306: "sharp-right",
      307: "right-turn-and-immediate-left-turn",
      308: "right-turn-and-immediate-right-turn",
      400: "up-elevator",
      401: "up-escalator",
      402: "up-stairs",
      500: "down-elevator",
      501: "down-escalator",
      502: "down-stairs",
      1e3: "general-event",
      1001: "landmark",
      1002: "time-zone-change",
      1003: "traffic-event",
      1004: "scaled-cost-barrier-event",
      1005: "boundary-crossing",
      1006: "restriction-violation",
    },
    { useNumericKeys: !0 }
  ),
  R = n()(
    {
      0: "unknown",
      1: "segment",
      2: "maneuver-segment",
      3: "restriction-violation",
      4: "scaled-cost-barrier",
      5: "heavy-traffic",
      6: "slow-traffic",
      7: "moderate-traffic",
    },
    { useNumericKeys: !0 }
  ),
  be = n()({
    "NA Campus": "campus",
    "NA Desktop": "desktop",
    "NA Navigation": "navigation",
  }),
  re = n()(
    { Kilometers: "kilometers", Miles: "miles", Meters: "meters" },
    { ignoreUnknown: !1 }
  ),
  se = n()(
    {
      Minutes: "minutes",
      TimeAt1KPH: "time-at-1-kph",
      TravelTime: "travel-time",
      TruckMinutes: "truck-minutes",
      TruckTravelTime: "truck-travel-time",
      WalkTime: "walk-time",
    },
    { ignoreUnknown: !1 }
  ),
  I = n()(
    {
      Kilometers: "kilometers",
      Miles: "miles",
      Meters: "meters",
      Minutes: "minutes",
      TimeAt1KPH: "time-at-1-kph",
      TravelTime: "travel-time",
      TruckMinutes: "truck-minutes",
      TruckTravelTime: "truck-travel-time",
      WalkTime: "walk-time",
    },
    { ignoreUnknown: !1 }
  ),
  Q = n()(
    {
      "Any Hazmat Prohibited": "any-hazmat-prohibited",
      "Avoid Carpool Roads": "avoid-carpool-roads",
      "Avoid Express Lanes": "avoid-express-lanes",
      "Avoid Ferries": "avoid-ferries",
      "Avoid Gates": "avoid-gates",
      "Avoid Limited Access Roads": "avoid-limited-access-roads",
      "Avoid Private Roads": "avoid-private-roads",
      "Avoid Roads Unsuitable for Pedestrians":
        "avoid-roads-unsuitable-for-pedestrians",
      "Avoid Stairways": "avoid-stairways",
      "Avoid Toll Roads": "avoid-toll-roads",
      "Avoid Toll Roads for Trucks": "avoid-toll-roads-for-trucks",
      "Avoid Truck Restricted Roads": "avoid-truck-restricted-roads",
      "Avoid Unpaved Roads": "avoid-unpaved-roads",
      "Axle Count Restriction": "axle-count-restriction",
      "Driving a Bus": "driving-a-bus",
      "Driving a Taxi": "driving-a-taxi",
      "Driving a Truck": "driving-a-truck",
      "Driving an Automobile": "driving-an-automobile",
      "Driving an Emergency Vehicle": "driving-an-emergency-vehicle",
      "Height Restriction": "height-restriction",
      "Kingpin to Rear Axle Length Restriction":
        "kingpin-to-rear-axle-length-restriction",
      "Length Restriction": "length-restriction",
      "Preferred for Pedestrians": "preferred-for-pedestrians",
      "Riding a Motorcycle": "riding-a-motorcycle",
      "Roads Under Construction Prohibited":
        "roads-under-construction-prohibited",
      "Semi or Tractor with One or More Trailers Prohibited":
        "semi-or-tractor-with-one-or-more-trailers-prohibited",
      "Single Axle Vehicles Prohibited": "single-axle-vehicles-prohibited",
      "Tandem Axle Vehicles Prohibited": "tandem-axle-vehicles-prohibited",
      "Through Traffic Prohibited": "through-traffic-prohibited",
      "Truck with Trailers Restriction": "truck-with-trailers-restriction",
      "Use Preferred Hazmat Routes": "use-preferred-hazmat-routes",
      "Use Preferred Truck Routes": "use-preferred-truck-routes",
      Walking: "walking",
      "Weight Restriction": "weight-restriction",
    },
    { ignoreUnknown: !1 }
  ),
  ce = n()({
    esriSpatialRelIntersects: "intersects",
    esriSpatialRelContains: "contains",
    esriSpatialRelCrosses: "crosses",
    esriSpatialRelEnvelopeIntersects: "envelope-intersects",
    esriSpatialRelIndexIntersects: "index-intersects",
    esriSpatialRelOverlaps: "overlaps",
    esriSpatialRelTouches: "touches",
    esriSpatialRelWithin: "within",
    esriSpatialRelRelation: "relation",
  }),
  ye = n()({
    esriGeometryPoint: "point",
    esriGeometryPolyline: "polyline",
    esriGeometryPolygon: "polygon",
    esriGeometryEnvelope: "envelope",
    esriGeometryMultipoint: "multipoint",
  }),
  Te = n()({
    esriNAUTCost: "cost",
    esriNAUTDescriptor: "descriptor",
    esriNAUTRestriction: "restriction",
    esriNAUTHierarchy: "hierarchy",
  }),
  ve = n()({
    esriDSTAltName: "alt-name",
    esriDSTArrive: "arrive",
    esriDSTBranch: "branch",
    esriDSTCrossStreet: "cross-street",
    esriDSTCumulativeLength: "cumulative-length",
    esriDSTDepart: "depart",
    esriDSTEstimatedArrivalTime: "estimated-arrival-time",
    esriDSTExit: "exit",
    esriDSTGeneral: "general",
    esriDSTLength: "length",
    esriDSTServiceTime: "service-time",
    esriDSTStreetName: "street-name",
    esriDSTSummary: "summary",
    esriDSTTime: "time",
    esriDSTTimeWindow: "time-window",
    esriDSTToward: "toward",
    esriDSTViolationTime: "violation-time",
    esriDSTWaitTime: "wait-time",
  });
var _;
let y = (_ = class extends w(A) {
  constructor(e) {
    super(e),
      (this.directionLineType = null),
      (this.directionPointId = null),
      (this.distance = null),
      (this.duration = null),
      (this.fromLevel = null),
      (this.geometry = null),
      (this.objectId = null),
      (this.popupTemplate = null),
      (this.symbol = null),
      (this.toLevel = null),
      (this.type = "direction-line");
  }
  static fromGraphic(e) {
    return new _({
      directionLineType: R.fromJSON(e.attributes.DirectionLineType),
      directionPointId: e.attributes.DirectionPointID,
      distance: e.attributes.Meters,
      duration: e.attributes.Minutes,
      fromLevel: e.attributes.FromLevel ?? null,
      geometry: e.geometry,
      objectId: e.attributes.ObjectID ?? e.attributes.__OBJECTID,
      popupTemplate: e.popupTemplate,
      symbol: e.symbol,
      toLevel: e.attributes.ToLevel ?? null,
    });
  }
  toGraphic() {
    const e = {
      ObjectID: v(this.objectId),
      DirectionLineType: r(this.directionLineType)
        ? R.toJSON(this.directionLineType)
        : null,
      DirectionPointID: v(this.directionPointId),
      Meters: v(this.distance),
      Minutes: v(this.duration),
    };
    return (
      r(this.fromLevel) && (e.FromLevel = this.fromLevel),
      r(this.toLevel) && (e.ToLevel = this.toLevel),
      new x({
        geometry: this.geometry,
        attributes: e,
        symbol: this.symbol,
        popupTemplate: this.popupTemplate,
      })
    );
  }
});
(y.fields = [
  {
    name: "ObjectID",
    alias: "ObjectID",
    type: "esriFieldTypeOID",
    editable: !1,
    nullable: !1,
    domain: null,
  },
  {
    name: "DirectionLineType",
    alias: "Line Type",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: {
      type: "codedValue",
      name: "esriDirectionsLineType",
      codedValues: [
        { name: "Unknown", code: 0 },
        { name: "Segment", code: 1 },
        { name: "Maneuver Segment", code: 2 },
        { name: "Restriction violation", code: 3 },
        { name: "Scale cost barrier crossing", code: 4 },
        { name: "Heavy Traffic", code: 5 },
        { name: "Slow Traffic", code: 6 },
        { name: "Moderate Traffic", code: 7 },
      ],
    },
  },
  {
    name: "DirectionPointID",
    alias: "Direction Point ID",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !1,
  },
  {
    name: "FromLevel",
    alias: "Start from 3D Level",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !1,
  },
  {
    name: "Meters",
    alias: "Length in Meters",
    type: "esriFieldTypeDouble",
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "Minutes",
    alias: "Duration in Minutes",
    type: "esriFieldTypeDouble",
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "ToLevel",
    alias: "End at 3D Level",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !1,
  },
]),
  (y.popupInfo = {
    title: "Direction Lines",
    fieldInfos: [
      {
        fieldName: "DirectionLineType",
        label: "Line Type",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "Meters",
        label: "Length in Meters",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        format: { places: 2, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "Minutes",
        label: "Duration in Minutes",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        format: { places: 2, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "DirectionPointID",
        label: "Direction Point ID",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        format: { places: 0, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "FromLevel",
        label: "Start from 3D Level",
        isEditable: !1,
        tooltip: "",
        visible: !1,
        format: { places: 0, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "ToLevel",
        label: "End at 3D Level",
        isEditable: !1,
        tooltip: "",
        visible: !1,
        format: { places: 0, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
    ],
    description: null,
    showAttachments: !1,
    mediaInfos: [],
  }),
  t(
    [
      i({
        type: R.apiValues,
        json: {
          read: { source: "attributes.DirectionLineType", reader: R.read },
        },
      }),
    ],
    y.prototype,
    "directionLineType",
    void 0
  ),
  t(
    [i({ json: { read: { source: "attributes.DirectionPointID" } } })],
    y.prototype,
    "directionPointId",
    void 0
  ),
  t(
    [i({ json: { read: { source: "attributes.Meters" } } })],
    y.prototype,
    "distance",
    void 0
  ),
  t(
    [i({ json: { read: { source: "attributes.Minutes" } } })],
    y.prototype,
    "duration",
    void 0
  ),
  t(
    [i({ json: { read: { source: "attributes.FromLevel" } } })],
    y.prototype,
    "fromLevel",
    void 0
  ),
  t([i({ type: X })], y.prototype, "geometry", void 0),
  t(
    [i({ json: { read: { source: "attributes.ObjectID" } } })],
    y.prototype,
    "objectId",
    void 0
  ),
  t([i({ type: E })], y.prototype, "popupTemplate", void 0),
  t([i({ types: j })], y.prototype, "symbol", void 0),
  t(
    [i({ json: { read: { source: "attributes.ToLevel" } } })],
    y.prototype,
    "toLevel",
    void 0
  ),
  t([i({ readOnly: !0, json: { read: !1 } })], y.prototype, "type", void 0),
  (y = _ = t([O("esri.rest.support.DirectionLine")], y));
const he = y;
var q;
let p = (q = class extends w(A) {
  constructor(e) {
    super(e),
      (this.alternateName = null),
      (this.arrivalTime = null),
      (this.arrivalTimeOffset = null),
      (this.azimuth = null),
      (this.branchName = null),
      (this.directionPointType = null),
      (this.displayText = null),
      (this.exitName = null),
      (this.geometry = null),
      (this.intersectingName = null),
      (this.level = null),
      (this.name = null),
      (this.objectId = null),
      (this.popupTemplate = null),
      (this.sequence = null),
      (this.shortVoiceInstruction = null),
      (this.stopId = null),
      (this.symbol = null),
      (this.towardName = null),
      (this.type = "direction-point"),
      (this.voiceInstruction = null);
  }
  readArrivalTime(e, a) {
    return r(a.attributes.ArrivalTime)
      ? new Date(a.attributes.ArrivalTime)
      : null;
  }
  static fromGraphic(e) {
    return new q({
      alternateName: e.attributes.AlternateName ?? null,
      arrivalTime: r(e.attributes.ArrivalTime)
        ? new Date(e.attributes.ArrivalTime)
        : null,
      arrivalTimeOffset: e.attributes.ArrivalUTCOffset ?? null,
      azimuth: e.attributes.Azimuth ?? null,
      branchName: e.attributes.BranchName ?? null,
      directionPointType: J.fromJSON(e.attributes.DirectionPointType),
      displayText: e.attributes.DisplayText ?? null,
      exitName: e.attributes.ExitName ?? null,
      geometry: e.geometry,
      intersectingName: e.attributes.IntersectingName ?? null,
      level: e.attributes.Level ?? null,
      name: e.attributes.Name ?? null,
      objectId: e.attributes.ObjectID ?? e.attributes.__OBJECTID,
      popupTemplate: e.popupTemplate,
      sequence: e.attributes.Sequence,
      shortVoiceInstruction: e.attributes.ShortVoiceInstruction ?? null,
      stopId: e.attributes.StopID ?? null,
      symbol: e.symbol,
      towardName: e.attributes.TowardName ?? null,
      voiceInstruction: e.attributes.VoiceInstruction ?? null,
    });
  }
  toGraphic() {
    const e = {
      ObjectID: v(this.objectId),
      DirectionPointType: r(this.directionPointType)
        ? J.toJSON(this.directionPointType)
        : null,
      Sequence: v(this.sequence),
      StopID: this.stopId,
    };
    return (
      r(this.alternateName) && (e.AlternateName = this.alternateName),
      r(this.arrivalTime) && (e.ArrivalTime = this.arrivalTime.getTime()),
      r(this.arrivalTimeOffset) &&
        (e.ArrivalUTCOffset = this.arrivalTimeOffset),
      r(this.azimuth) && (e.Azimuth = this.azimuth),
      r(this.branchName) && (e.BranchName = this.branchName),
      r(this.displayText) && (e.DisplayText = this.displayText),
      r(this.exitName) && (e.ExitName = this.exitName),
      r(this.intersectingName) && (e.IntersectingName = this.intersectingName),
      r(this.level) && (e.Level = this.level),
      r(this.name) && (e.Name = this.name),
      r(this.shortVoiceInstruction) &&
        (e.ShortVoiceInstruction = this.shortVoiceInstruction),
      r(this.towardName) && (e.TowardName = this.towardName),
      r(this.voiceInstruction) && (e.VoiceInstruction = this.voiceInstruction),
      new x({
        geometry: this.geometry,
        attributes: e,
        symbol: this.symbol,
        popupTemplate: this.popupTemplate,
      })
    );
  }
});
(p.fields = [
  {
    name: "ObjectID",
    alias: "ObjectID",
    type: "esriFieldTypeOID",
    editable: !1,
    nullable: !1,
    domain: null,
  },
  {
    name: "AlternateName",
    alias: "Alternative Feature Name",
    type: "esriFieldTypeString",
    length: 2048,
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: null,
  },
  {
    name: "ArrivalTime",
    alias: "Maneuver Starts at",
    type: "esriFieldTypeDate",
    length: 36,
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "ArrivalUTCOffset",
    alias: "Offset from UTC in Minutes",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "Azimuth",
    alias: "Azimuth",
    type: "esriFieldTypeDouble",
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "BranchName",
    alias: "Signpost Branch Name",
    type: "esriFieldTypeString",
    length: 2048,
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: null,
  },
  {
    name: "DirectionPointType",
    alias: "Directions Item Type",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: {
      type: "codedValue",
      name: "esriDirectionPointType",
      codedValues: [
        { name: "Unknown", code: 0 },
        { name: "", code: 1 },
        { name: "Arrive at stop", code: 50 },
        { name: "Depart at stop", code: 51 },
        { name: "Go straight", code: 52 },
        { name: "Take ferry", code: 100 },
        { name: "Take off ferry", code: 101 },
        { name: "Keep center at fork", code: 102 },
        { name: "Take roundabout", code: 103 },
        { name: "Make U-Turn", code: 104 },
        { name: "Pass the door", code: 150 },
        { name: "Take stairs", code: 151 },
        { name: "", code: 152 },
        { name: "Take escalator", code: 153 },
        { name: "Take pedestrian ramp", code: 154 },
        { name: "Keep left at fork", code: 200 },
        { name: "Ramp left", code: 201 },
        { name: "Take left-handed roundabout", code: 202 },
        { name: "Make left-handed U-Turn", code: 203 },
        { name: "Bear left", code: 204 },
        { name: "Turn left", code: 205 },
        { name: "Make sharp left", code: 206 },
        { name: "Turn left, followed by turn left", code: 207 },
        { name: "Turn left, followed by turn right", code: 208 },
        { name: "Keep right at fork", code: 300 },
        { name: "Ramp right", code: 301 },
        { name: "Take right-handed roundabout", code: 302 },
        { name: "Make right-handed U-Turn", code: 303 },
        { name: "Bear right", code: 304 },
        { name: "Turn right", code: 305 },
        { name: "Make sharp right", code: 306 },
        { name: "Turn right, followed by turn left", code: 307 },
        { name: "Turn right, followed by turn right", code: 308 },
        { name: "Indicates up direction of elevator", code: 400 },
        { name: "Indicates up direction of escalator", code: 401 },
        { name: "Take up-stairs", code: 402 },
        { name: "Indicates down direction of elevator", code: 500 },
        { name: "Indicates down direction of escalator", code: 501 },
        { name: "Take down-stairs", code: 502 },
        { name: "General event", code: 1e3 },
        { name: "Landmark", code: 1001 },
        { name: "Time zone change", code: 1002 },
        { name: "Heavy traffic segment", code: 1003 },
        { name: "Scale cost barrier crossing", code: 1004 },
        { name: "Administrative Border crossing", code: 1005 },
        { name: "Restriction violation", code: 1006 },
      ],
    },
  },
  {
    name: "DisplayText",
    alias: "Text to Display",
    type: "esriFieldTypeString",
    length: 2048,
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: null,
  },
  {
    name: "ExitName",
    alias: "Highway Exit Name",
    type: "esriFieldTypeString",
    length: 2048,
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: null,
  },
  {
    name: "IntersectingName",
    alias: "Intersecting Feature Name",
    type: "esriFieldTypeString",
    length: 2048,
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: null,
  },
  {
    name: "Level",
    alias: "3D Logical Level",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "Name",
    alias: "Primary Feature Name",
    type: "esriFieldTypeString",
    length: 2048,
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: null,
  },
  {
    name: "Sequence",
    alias: "Sequence",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "ShortVoiceInstruction",
    alias: "Voice Instruction",
    type: "esriFieldTypeString",
    length: 2048,
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: null,
  },
  {
    name: "StopID",
    alias: "Stop ID",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "TowardName",
    alias: "Signpost Toward Name",
    type: "esriFieldTypeString",
    length: 2048,
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: null,
  },
  {
    name: "VoiceInstruction",
    alias: "Voice Full Instruction",
    type: "esriFieldTypeString",
    length: 2048,
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: null,
  },
]),
  (p.popupInfo = {
    title: "{DisplayText}",
    fieldInfos: [
      {
        fieldName: "DirectionPointType",
        label: "Directions Item Type",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "DisplayText",
        label: "Text to Display",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "Sequence",
        label: "Sequence",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        format: { places: 0, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "StopID",
        label: "Stop ID",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        format: { places: 0, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "ArrivalTime",
        label: "Maneuver Starts at",
        isEditable: !0,
        tooltip: "",
        visible: !0,
        format: { dateFormat: "shortDateShortTime24" },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "ArrivalUTCOffset",
        label: "Offset from UTC in Minutes",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        format: { places: 0, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "Azimuth",
        label: "Azimuth",
        isEditable: !1,
        tooltip: "",
        visible: !1,
        format: { places: 0, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "Name",
        label: "Primary Feature Name",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "AlternateName",
        label: "Alternative Feature Name",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "ExitName",
        label: "Highway Exit Name",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "IntersectingName",
        label: "Intersecting Feature Name",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "BranchName",
        label: "Signpost Branch Name",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "TowardName",
        label: "Signpost Toward Name",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "ShortVoiceInstruction",
        label: "Voice Instruction",
        isEditable: !1,
        tooltip: "",
        visible: !1,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "VoiceInstruction",
        label: "Voice Full Instruction",
        isEditable: !1,
        tooltip: "",
        visible: !1,
        stringFieldOption: "textbox",
      },
    ],
    description: null,
    showAttachments: !1,
    mediaInfos: [],
  }),
  t([i()], p.prototype, "alternateName", void 0),
  t([i()], p.prototype, "arrivalTime", void 0),
  t(
    [d("arrivalTime", ["attributes.ArrivalTime"])],
    p.prototype,
    "readArrivalTime",
    null
  ),
  t(
    [i({ json: { read: { source: "attributes.ArrivalUTCOffset" } } })],
    p.prototype,
    "arrivalTimeOffset",
    void 0
  ),
  t(
    [i({ json: { read: { source: "attributes.Azimuth" } } })],
    p.prototype,
    "azimuth",
    void 0
  ),
  t(
    [i({ json: { read: { source: "attributes.BranchName" } } })],
    p.prototype,
    "branchName",
    void 0
  ),
  t(
    [
      i({
        type: J.apiValues,
        json: {
          read: { source: "attributes.DirectionPointType", reader: J.read },
        },
      }),
    ],
    p.prototype,
    "directionPointType",
    void 0
  ),
  t(
    [i({ json: { read: { source: "attributes.DisplayText" } } })],
    p.prototype,
    "displayText",
    void 0
  ),
  t(
    [i({ json: { read: { source: "attributes.ExitName" } } })],
    p.prototype,
    "exitName",
    void 0
  ),
  t([i({ type: Z })], p.prototype, "geometry", void 0),
  t([i()], p.prototype, "intersectingName", void 0),
  t([i()], p.prototype, "level", void 0),
  t(
    [i({ json: { read: { source: "attributes.Name" } } })],
    p.prototype,
    "name",
    void 0
  ),
  t(
    [i({ json: { read: { source: "attributes.ObjectID" } } })],
    p.prototype,
    "objectId",
    void 0
  ),
  t([i({ type: E })], p.prototype, "popupTemplate", void 0),
  t(
    [i({ json: { read: { source: "attributes.Sequence" } } })],
    p.prototype,
    "sequence",
    void 0
  ),
  t([i()], p.prototype, "shortVoiceInstruction", void 0),
  t(
    [i({ json: { read: { source: "attributes.StopID" } } })],
    p.prototype,
    "stopId",
    void 0
  ),
  t([i({ types: j })], p.prototype, "symbol", void 0),
  t(
    [i({ json: { read: { source: "attributes.TowardName" } } })],
    p.prototype,
    "towardName",
    void 0
  ),
  t([i({ readOnly: !0, json: { read: !1 } })], p.prototype, "type", void 0),
  t([i()], p.prototype, "voiceInstruction", void 0),
  (p = q = t([O("esri.rest.support.DirectionPoint")], p));
const fe = p;
function S(e, a) {
  if (N(e)) return null;
  const o = {},
    b = new RegExp(`^${a}`, "i");
  for (const D of Object.keys(e))
    if (b.test(D)) {
      const V = D.substring(a.length);
      o[I.fromJSON(V)] = e[D];
    }
  return o;
}
function $(e, a, o) {
  if (!N(e)) {
    a.attributes || (a.attributes = {});
    for (const b in e) {
      const D = I.toJSON(b);
      a.attributes[`${o}${D}`] = e[b];
    }
  }
}
function U(e) {
  const a = {};
  for (const o of Object.keys(e)) {
    const b = o;
    a[I.fromJSON(b)] = e[o];
  }
  return a;
}
function k(e) {
  const a = {};
  for (const o of Object.keys(e)) {
    const b = o;
    a[I.toJSON(b)] = e[o];
  }
  return a;
}
function P(e, a) {
  return N(e) || N(a) ? null : Math.round((e - a) / 6e4);
}
function ge(e) {
  var b, D, V;
  const a = e.toJSON(),
    o = a;
  return (
    o.accumulateAttributeNames &&
      (o.accumulateAttributeNames =
        (b = a.accumulateAttributeNames) == null ? void 0 : b.join()),
    o.attributeParameterValues &&
      (o.attributeParameterValues = JSON.stringify(a.attributeParameterValues)),
    o.barriers && (o.barriers = JSON.stringify(a.barriers)),
    o.outSR && (o.outSR = (D = a.outSR) == null ? void 0 : D.wkid),
    o.overrides && (o.overrides = JSON.stringify(a.overrides)),
    o.polygonBarriers &&
      (o.polygonBarriers = JSON.stringify(a.polygonBarriers)),
    o.polylineBarriers &&
      (o.polylineBarriers = JSON.stringify(a.polylineBarriers)),
    o.restrictionAttributeNames &&
      (o.restrictionAttributeNames =
        (V = a.restrictionAttributeNames) == null ? void 0 : V.join()),
    o.stops && (o.stops = JSON.stringify(a.stops)),
    o.travelMode && (o.travelMode = JSON.stringify(a.travelMode)),
    o
  );
}
var K;
let u = (K = class extends w(A) {
  constructor(e) {
    super(e),
      (this.addedCost = null),
      (this.barrierType = null),
      (this.costs = null),
      (this.curbApproach = null),
      (this.fullEdge = null),
      (this.geometry = null),
      (this.name = null),
      (this.objectId = null),
      (this.popupTemplate = null),
      (this.sideOfEdge = null),
      (this.sourceId = null),
      (this.sourceOid = null),
      (this.status = null),
      (this.symbol = null),
      (this.type = "point-barrier");
  }
  readCosts(e, a) {
    return S(a.attributes, "Attr_");
  }
  writeCosts(e, a) {
    $(e, a, "Attr_");
  }
  static fromGraphic(e) {
    return new K({
      addedCost: e.attributes.AddedCost ?? null,
      barrierType: r(e.attributes.BarrierType)
        ? f.fromJSON(e.attributes.BarrierType)
        : null,
      costs: r(e.attributes.Costs) ? U(JSON.parse(e.attributes.Costs)) : null,
      curbApproach: r(e.attributes.CurbApproach)
        ? c.fromJSON(e.attributes.CurbApproach)
        : null,
      fullEdge: r(e.attributes.FullEdge)
        ? W.fromJSON(e.attributes.FullEdge)
        : null,
      geometry: e.geometry,
      name: e.attributes.Name ?? null,
      objectId: e.attributes.ObjectID ?? e.attributes.__OBJECTID,
      popupTemplate: e.popupTemplate,
      status: r(e.attributes.Status) ? C.fromJSON(e.attributes.Status) : null,
      symbol: e.symbol,
    });
  }
  toGraphic() {
    const e = {
      ObjectID: v(this.objectId),
      AddedCost: this.addedCost,
      BarrierType: r(this.barrierType) ? f.toJSON(this.barrierType) : null,
      Costs: r(this.costs) ? JSON.stringify(k(this.costs)) : null,
      CurbApproach: r(this.curbApproach) ? c.toJSON(this.curbApproach) : null,
      FullEdge: r(this.fullEdge) ? W.toJSON(this.fullEdge) : null,
      Name: this.name,
      Status: r(this.status) ? C.toJSON(this.status) : null,
    };
    return new x({
      geometry: this.geometry,
      attributes: e,
      symbol: this.symbol,
      popupTemplate: this.popupTemplate,
    });
  }
});
(u.fields = [
  {
    name: "ObjectID",
    alias: "ObjectID",
    type: "esriFieldTypeOID",
    editable: !1,
    nullable: !1,
    domain: null,
  },
  {
    name: "AddedCost",
    alias: "Added Cost",
    type: "esriFieldTypeDouble",
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: null,
  },
  {
    name: "BarrierType",
    alias: "Barrier Type",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: {
      type: "codedValue",
      name: "esriNABarrierType",
      codedValues: [
        { name: "Restriction", code: 0 },
        { name: "Scaled Cost", code: 1 },
        { name: "Added Cost", code: 2 },
      ],
    },
  },
  {
    name: "Costs",
    alias: "Costs",
    type: "esriFieldTypeString",
    length: 1048576,
    editable: !0,
    nullable: !0,
    visible: !1,
    domain: null,
  },
  {
    name: "CurbApproach",
    alias: "Curb Approach",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !1,
    domain: {
      type: "codedValue",
      name: "esriNACurbApproachType",
      codedValues: [
        { name: "Either side", code: 0 },
        { name: "From the right", code: 1 },
        { name: "From the left", code: 2 },
        { name: "Depart in the same direction", code: 3 },
      ],
    },
  },
  {
    name: "FullEdge",
    alias: "Full Edge",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: {
      type: "codedValue",
      name: "esriNAIntYesNo",
      codedValues: [
        { name: "No", code: 0 },
        { name: "Yes", code: 1 },
      ],
    },
  },
  {
    name: "Name",
    alias: "Name",
    type: "esriFieldTypeString",
    length: 255,
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "Status",
    alias: "Status",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: {
      type: "codedValue",
      name: "esriNAObjectStatus",
      codedValues: [
        { name: "OK", code: 0 },
        { name: "Not Located on Network", code: 1 },
        { name: "Network Unbuilt", code: 2 },
        { name: "Prohibited Street", code: 3 },
        { name: "Invalid Field Values", code: 4 },
        { name: "Cannot Reach", code: 5 },
        { name: "Time Window Violation", code: 6 },
      ],
    },
  },
]),
  (u.popupInfo = {
    title: "Point Barriers",
    fieldInfos: [
      {
        fieldName: "Name",
        label: "Name",
        isEditable: !0,
        tooltip: "",
        visible: !0,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "BarrierType",
        label: "Barrier Type",
        isEditable: !0,
        tooltip: "",
        visible: !0,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "AddedCost",
        label: "Added Cost",
        isEditable: !0,
        tooltip: "",
        visible: !0,
        format: { places: 3, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
    ],
    description: null,
    showAttachments: !1,
    mediaInfos: [],
  }),
  t([i()], u.prototype, "addedCost", void 0),
  t(
    [
      i({
        type: f.apiValues,
        json: {
          name: "attributes.BarrierType",
          read: { reader: f.read },
          write: { writer: f.write },
        },
      }),
    ],
    u.prototype,
    "barrierType",
    void 0
  ),
  t([i()], u.prototype, "costs", void 0),
  t([d("costs", ["attributes"])], u.prototype, "readCosts", null),
  t([F("costs")], u.prototype, "writeCosts", null),
  t(
    [
      i({
        type: c.apiValues,
        json: { read: { source: "attributes.CurbApproach", reader: c.read } },
      }),
    ],
    u.prototype,
    "curbApproach",
    void 0
  ),
  t(
    [
      i({
        type: W.apiValues,
        json: {
          name: "attributes.FullEdge",
          read: { reader: W.read },
          write: { writer: W.write },
        },
      }),
    ],
    u.prototype,
    "fullEdge",
    void 0
  ),
  t([i({ type: Z, json: { write: !0 } })], u.prototype, "geometry", void 0),
  t([i({ json: { name: "attributes.Name" } })], u.prototype, "name", void 0),
  t(
    [i({ json: { name: "attributes.ObjectID" } })],
    u.prototype,
    "objectId",
    void 0
  ),
  t([i({ type: E })], u.prototype, "popupTemplate", void 0),
  t(
    [
      i({
        type: B.apiValues,
        json: { read: { source: "attributes.SideOfEdge", reader: B.read } },
      }),
    ],
    u.prototype,
    "sideOfEdge",
    void 0
  ),
  t(
    [i({ json: { read: { source: "attributes.SourceID" } } })],
    u.prototype,
    "sourceId",
    void 0
  ),
  t(
    [i({ json: { read: { source: "attributes.SourceOID" } } })],
    u.prototype,
    "sourceOid",
    void 0
  ),
  t(
    [
      i({
        type: C.apiValues,
        json: { read: { source: "attributes.Status", reader: C.read } },
      }),
    ],
    u.prototype,
    "status",
    void 0
  ),
  t([i({ types: j })], u.prototype, "symbol", void 0),
  t([i({ readOnly: !0, json: { read: !1 } })], u.prototype, "type", void 0),
  (u = K = t([O("esri.rest.support.PointBarrier")], u));
const Se = u;
var G;
let T = (G = class extends w(A) {
  constructor(e) {
    super(e),
      (this.barrierType = null),
      (this.costs = null),
      (this.geometry = null),
      (this.name = null),
      (this.objectId = null),
      (this.popupTemplate = null),
      (this.scaleFactor = null),
      (this.symbol = null),
      (this.type = "polygon-barrier");
  }
  readCosts(e, a) {
    return S(a.attributes, "Attr_");
  }
  writeCosts(e, a) {
    $(e, a, "Attr_");
  }
  static fromGraphic(e) {
    return new G({
      barrierType: r(e.attributes.BarrierType)
        ? f.fromJSON(e.attributes.BarrierType)
        : null,
      costs: r(e.attributes.Costs) ? U(JSON.parse(e.attributes.Costs)) : null,
      geometry: e.geometry,
      name: e.attributes.Name ?? null,
      objectId: e.attributes.ObjectID ?? e.attributes.__OBJECTID,
      popupTemplate: e.popupTemplate,
      scaleFactor: e.attributes.ScaleFactor ?? null,
      symbol: e.symbol,
    });
  }
  toGraphic() {
    const e = {
      ObjectID: v(this.objectId),
      BarrierType: r(this.barrierType) ? f.toJSON(this.barrierType) : null,
      Costs: r(this.costs) ? JSON.stringify(k(this.costs)) : null,
      Name: this.name ?? null,
      ScaleFactor: this.scaleFactor ?? null,
    };
    return new x({
      geometry: this.geometry,
      attributes: e,
      symbol: this.symbol,
      popupTemplate: this.popupTemplate,
    });
  }
});
(T.fields = [
  {
    name: "ObjectID",
    alias: "ObjectID",
    type: "esriFieldTypeOID",
    editable: !1,
    nullable: !1,
    domain: null,
  },
  {
    name: "BarrierType",
    alias: "Barrier Type",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: {
      type: "codedValue",
      name: "esriNABarrierType",
      codedValues: [
        { name: "Restriction", code: 0 },
        { name: "Scaled Cost", code: 1 },
        { name: "Added Cost", code: 2 },
      ],
    },
  },
  {
    name: "Costs",
    alias: "Costs",
    type: "esriFieldTypeString",
    length: 1048576,
    editable: !0,
    nullable: !0,
    visible: !1,
    domain: null,
  },
  {
    name: "Name",
    alias: "Name",
    type: "esriFieldTypeString",
    length: 255,
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "ScaleFactor",
    alias: "Scale Factor",
    type: "esriFieldTypeDouble",
    editable: !0,
    nullable: !0,
    visible: !0,
  },
]),
  (T.popupInfo = {
    title: "Polygon Barriers",
    fieldInfos: [
      {
        fieldName: "Name",
        label: "Name",
        isEditable: !0,
        tooltip: "",
        visible: !0,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "BarrierType",
        label: "Barrier Type",
        isEditable: !0,
        tooltip: "",
        visible: !0,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "ScaleFactor",
        isEditable: !0,
        tooltip: "",
        visible: !0,
        format: { places: 3, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "Costs",
        label: "Costs",
        isEditable: !0,
        tooltip: "",
        visible: !1,
        stringFieldOption: "textbox",
      },
    ],
    description: null,
    showAttachments: !1,
    mediaInfos: [],
  }),
  t(
    [
      i({
        type: f.apiValues,
        json: {
          name: "attributes.BarrierType",
          read: { reader: f.read },
          write: { writer: f.write },
        },
      }),
    ],
    T.prototype,
    "barrierType",
    void 0
  ),
  t([i()], T.prototype, "costs", void 0),
  t([d("costs", ["attributes"])], T.prototype, "readCosts", null),
  t([F("costs")], T.prototype, "writeCosts", null),
  t([i({ type: ee, json: { write: !0 } })], T.prototype, "geometry", void 0),
  t([i({ json: { name: "attributes.Name" } })], T.prototype, "name", void 0),
  t(
    [i({ json: { name: "attributes.ObjectID" } })],
    T.prototype,
    "objectId",
    void 0
  ),
  t([i({ type: E })], T.prototype, "popupTemplate", void 0),
  t([i()], T.prototype, "scaleFactor", void 0),
  t([i({ types: j })], T.prototype, "symbol", void 0),
  t([i({ readOnly: !0, json: { read: !1 } })], T.prototype, "type", void 0),
  (T = G = t([O("esri.rest.support.PolygonBarrier")], T));
const Ne = T;
var z;
let h = (z = class extends w(A) {
  constructor(e) {
    super(e),
      (this.barrierType = null),
      (this.costs = null),
      (this.geometry = null),
      (this.name = null),
      (this.objectId = null),
      (this.popupTemplate = null),
      (this.scaleFactor = null),
      (this.symbol = null),
      (this.type = "polyline-barrier");
  }
  readCosts(e, a) {
    return S(a.attributes, "Attr_");
  }
  static fromGraphic(e) {
    return new z({
      barrierType: r(e.attributes.BarrierType)
        ? f.fromJSON(e.attributes.BarrierType)
        : null,
      costs: r(e.attributes.Costs) ? U(JSON.parse(e.attributes.Costs)) : null,
      geometry: e.geometry,
      name: e.attributes.Name ?? null,
      objectId: e.attributes.ObjectID ?? e.attributes.__OBJECTID,
      popupTemplate: e.popupTemplate,
      scaleFactor: e.attributes.ScaleFactor ?? null,
      symbol: e.symbol,
    });
  }
  toGraphic() {
    const e = {
      ObjectID: v(this.objectId),
      BarrierType: r(this.barrierType) ? f.toJSON(this.barrierType) : null,
      Costs: r(this.costs) ? JSON.stringify(k(this.costs)) : null,
      Name: this.name,
      ScaleFactor: this.scaleFactor,
    };
    return new x({
      geometry: this.geometry,
      attributes: e,
      symbol: this.symbol,
      popupTemplate: this.popupTemplate,
    });
  }
});
(h.fields = [
  {
    name: "ObjectID",
    alias: "ObjectID",
    type: "esriFieldTypeOID",
    editable: !1,
    nullable: !1,
    domain: null,
  },
  {
    name: "BarrierType",
    alias: "Barrier Type",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: {
      type: "codedValue",
      name: "esriNABarrierType",
      codedValues: [
        { name: "Restriction", code: 0 },
        { name: "Scaled Cost", code: 1 },
        { name: "Added Cost", code: 2 },
      ],
    },
  },
  {
    name: "Costs",
    alias: "Costs",
    type: "esriFieldTypeString",
    length: 1048576,
    editable: !0,
    nullable: !0,
    visible: !1,
    domain: null,
  },
  {
    name: "Name",
    alias: "Name",
    type: "esriFieldTypeString",
    length: 255,
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "ScaleFactor",
    alias: "Scale Factor",
    type: "esriFieldTypeDouble",
    editable: !0,
    nullable: !0,
    visible: !0,
  },
]),
  (h.popupInfo = {
    title: "Line Barriers",
    fieldInfos: [
      {
        fieldName: "Name",
        label: "Name",
        isEditable: !0,
        tooltip: "",
        visible: !0,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "BarrierType",
        label: "Barrier Type",
        isEditable: !0,
        tooltip: "",
        visible: !0,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "ScaleFactor",
        isEditable: !0,
        tooltip: "",
        visible: !0,
        format: { places: 3, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "Costs",
        label: "Costs",
        isEditable: !0,
        tooltip: "",
        visible: !1,
        stringFieldOption: "textbox",
      },
    ],
    description: null,
    showAttachments: !1,
    mediaInfos: [],
  }),
  t(
    [
      i({
        type: f.apiValues,
        json: { read: { source: "attributes.BarrierType", reader: f.read } },
      }),
    ],
    h.prototype,
    "barrierType",
    void 0
  ),
  t([i()], h.prototype, "costs", void 0),
  t([d("costs", ["attributes"])], h.prototype, "readCosts", null),
  t([i({ type: X, json: { write: !0 } })], h.prototype, "geometry", void 0),
  t([i({ json: { name: "attributes.Name" } })], h.prototype, "name", void 0),
  t(
    [i({ json: { name: "attributes.ObjectID" } })],
    h.prototype,
    "objectId",
    void 0
  ),
  t([i({ type: E })], h.prototype, "popupTemplate", void 0),
  t([i()], h.prototype, "scaleFactor", void 0),
  t([i({ types: j })], h.prototype, "symbol", void 0),
  t([i({ readOnly: !0, json: { read: !1 } })], h.prototype, "type", void 0),
  (h = z = t([O("esri.rest.support.PolylineBarrier")], h));
const Oe = h;
let m = class extends w(A) {
  constructor(e) {
    super(e),
      (this.attributeParameterValues = null),
      (this.description = null),
      (this.distanceAttributeName = null),
      (this.id = null),
      (this.impedanceAttributeName = null),
      (this.name = null),
      (this.restrictionAttributeNames = null),
      (this.simplificationTolerance = null),
      (this.simplificationToleranceUnits = null),
      (this.timeAttributeName = null),
      (this.type = null),
      (this.useHierarchy = null),
      (this.uturnAtJunctions = null);
  }
  readId(e, a) {
    return a.id ?? a.itemId ?? null;
  }
  readRestrictionAttributes(e, a) {
    const { restrictionAttributeNames: o } = a;
    return N(o) ? null : o.map((b) => Q.fromJSON(b));
  }
  writeRestrictionAttributes(e, a, o) {
    N(e) || (a[o] = e.map((b) => Q.toJSON(b)));
  }
};
t(
  [i({ type: [Object], json: { write: !0 } })],
  m.prototype,
  "attributeParameterValues",
  void 0
),
  t(
    [i({ type: String, json: { write: !0 } })],
    m.prototype,
    "description",
    void 0
  ),
  t(
    [M(re, { ignoreUnknown: !1 })],
    m.prototype,
    "distanceAttributeName",
    void 0
  ),
  t([i({ type: String, json: { write: !0 } })], m.prototype, "id", void 0),
  t([d("id", ["id", "itemId"])], m.prototype, "readId", null),
  t(
    [M(I, { ignoreUnknown: !1 })],
    m.prototype,
    "impedanceAttributeName",
    void 0
  ),
  t([i({ type: String, json: { write: !0 } })], m.prototype, "name", void 0),
  t(
    [i({ type: [String], json: { write: !0 } })],
    m.prototype,
    "restrictionAttributeNames",
    void 0
  ),
  t(
    [d("restrictionAttributeNames")],
    m.prototype,
    "readRestrictionAttributes",
    null
  ),
  t(
    [F("restrictionAttributeNames")],
    m.prototype,
    "writeRestrictionAttributes",
    null
  ),
  t(
    [i({ type: Number, json: { write: { allowNull: !0 } } })],
    m.prototype,
    "simplificationTolerance",
    void 0
  ),
  t([M(te)], m.prototype, "simplificationToleranceUnits", void 0),
  t([M(se, { ignoreUnknown: !1 })], m.prototype, "timeAttributeName", void 0),
  t([M(ae)], m.prototype, "type", void 0),
  t(
    [i({ type: Boolean, json: { write: !0 } })],
    m.prototype,
    "useHierarchy",
    void 0
  ),
  t([M(ie)], m.prototype, "uturnAtJunctions", void 0),
  (m = t([O("esri.rest.support.TravelMode")], m));
const oe = m;
let g = class extends A {
  constructor(e) {
    super(e),
      (this.accumulateAttributes = null),
      (this.directionsLanguage = null),
      (this.findBestSequence = null),
      (this.preserveFirstStop = null),
      (this.preserveLastStop = null),
      (this.startTimeIsUTC = null),
      (this.timeWindowsAreUTC = null),
      (this.travelMode = null);
  }
  readAccumulateAttributes(e) {
    return N(e) ? null : e.map((a) => I.fromJSON(a));
  }
  writeAccumulateAttributes(e, a, o) {
    !N(e) && e.length && (a[o] = e.map((b) => I.toJSON(b)));
  }
};
t(
  [
    i({
      type: [String],
      json: { name: "accumulateAttributeNames", write: !0 },
    }),
  ],
  g.prototype,
  "accumulateAttributes",
  void 0
),
  t([d("accumulateAttributes")], g.prototype, "readAccumulateAttributes", null),
  t(
    [F("accumulateAttributes")],
    g.prototype,
    "writeAccumulateAttributes",
    null
  ),
  t(
    [i({ type: String, json: { write: !0 } })],
    g.prototype,
    "directionsLanguage",
    void 0
  ),
  t(
    [i({ type: Boolean, json: { write: !0 } })],
    g.prototype,
    "findBestSequence",
    void 0
  ),
  t(
    [i({ type: Boolean, json: { write: !0 } })],
    g.prototype,
    "preserveFirstStop",
    void 0
  ),
  t(
    [i({ type: Boolean, json: { write: !0 } })],
    g.prototype,
    "preserveLastStop",
    void 0
  ),
  t(
    [i({ type: Boolean, json: { write: !0 } })],
    g.prototype,
    "startTimeIsUTC",
    void 0
  ),
  t(
    [i({ type: Boolean, json: { write: !0 } })],
    g.prototype,
    "timeWindowsAreUTC",
    void 0
  ),
  t([i({ type: oe, json: { write: !0 } })], g.prototype, "travelMode", void 0),
  (g = t([O("esri.layers.support.RouteSettings")], g));
const le = g;
var H;
let l = (H = class extends w(A) {
  constructor(e) {
    super(e),
      (this.analysisSettings = null),
      (this.endTime = null),
      (this.endTimeOffset = null),
      (this.firstStopId = null),
      (this.geometry = null),
      (this.lastStopId = null),
      (this.messages = null),
      (this.name = null),
      (this.objectId = null),
      (this.popupTemplate = null),
      (this.startTime = null),
      (this.startTimeOffset = null),
      (this.stopCount = null),
      (this.symbol = null),
      (this.totalCosts = null),
      (this.totalDistance = null),
      (this.totalDuration = null),
      (this.totalLateDuration = null),
      (this.totalViolations = null),
      (this.totalWait = null),
      (this.totalWaitDuration = null),
      (this.type = "route-info"),
      (this.version = "1.0.0");
  }
  readEndTime(e, a) {
    return r(a.attributes.EndTimeUTC)
      ? new Date(a.attributes.EndTimeUTC)
      : null;
  }
  readEndTimeOffset(e, a) {
    return P(a.attributes.EndTime, a.attributes.EndTimeUTC);
  }
  readStartTime(e, a) {
    return r(a.attributes.StartTimeUTC)
      ? new Date(a.attributes.StartTimeUTC)
      : null;
  }
  readStartTimeOffset(e, a) {
    return P(a.attributes.StartTime, a.attributes.StartTimeUTC);
  }
  readTotalCosts(e, a) {
    return S(a.attributes, "Total_");
  }
  readTotalViolations(e, a) {
    return S(a.attributes, "TotalViolation_");
  }
  readTotalWait(e, a) {
    return S(a.attributes, "TotalWait_");
  }
  static fromGraphic(e) {
    return new H({
      analysisSettings: r(e.attributes.AnalysisSettings)
        ? le.fromJSON(JSON.parse(e.attributes.AnalysisSettings))
        : null,
      endTime: r(e.attributes.EndTime) ? new Date(e.attributes.EndTime) : null,
      endTimeOffset: e.attributes.EndUTCOffset ?? null,
      geometry: e.geometry,
      messages: r(e.attributes.Messages)
        ? JSON.parse(e.attributes.Messages)
        : null,
      name: e.attributes.RouteName,
      objectId: e.attributes.ObjectID ?? e.attributes.__OBJECTID,
      popupTemplate: e.popupTemplate,
      startTime: r(e.attributes.StartTime)
        ? new Date(e.attributes.StartTime)
        : null,
      startTimeOffset: e.attributes.StartUTCOffset ?? null,
      symbol: e.symbol,
      totalCosts: r(e.attributes.TotalCosts)
        ? U(JSON.parse(e.attributes.TotalCosts))
        : null,
      totalDistance: e.attributes.TotalMeters ?? null,
      totalDuration: e.attributes.TotalMinutes ?? null,
      totalLateDuration: e.attributes.TotalLateMinutes ?? null,
      totalWaitDuration: e.attributes.TotalWaitMinutes ?? null,
      version: e.attributes.Version,
    });
  }
  toGraphic() {
    const e = {
      ObjectID: v(this.objectId),
      AnalysisSettings: r(this.analysisSettings)
        ? JSON.stringify(this.analysisSettings.toJSON())
        : null,
      EndTime: r(this.endTime) ? this.endTime.getTime() : null,
      EndUTCOffset: this.endTimeOffset,
      Messages: r(this.messages) ? JSON.stringify(this.messages) : null,
      RouteName: v(this.name),
      StartTime: r(this.startTime) ? this.startTime.getTime() : null,
      StartUTCOffset: this.startTimeOffset,
      TotalCosts: r(this.totalCosts)
        ? JSON.stringify(k(this.totalCosts))
        : null,
      TotalLateMinutes: this.totalLateDuration,
      TotalMeters: this.totalDistance,
      TotalMinutes: this.totalDuration,
      TotalWaitMinutes: this.totalWaitDuration,
      Version: v(this.version),
    };
    return new x({
      geometry: this.geometry,
      attributes: e,
      symbol: this.symbol,
      popupTemplate: v(this.popupTemplate),
    });
  }
});
(l.fields = [
  {
    name: "ObjectID",
    alias: "ObjectID",
    type: "esriFieldTypeOID",
    editable: !1,
    nullable: !1,
    domain: null,
  },
  {
    name: "AnalysisSettings",
    alias: "Analysis Settings",
    type: "esriFieldTypeString",
    length: 1048576,
    editable: !0,
    nullable: !0,
    visible: !1,
    domain: null,
  },
  {
    name: "EndTime",
    alias: "End Time",
    type: "esriFieldTypeDate",
    length: 36,
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "EndUTCOffset",
    alias: "End Time: Offset from UTC in Minutes",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "Messages",
    alias: "Analysis Messages",
    type: "esriFieldTypeString",
    length: 1048576,
    editable: !0,
    nullable: !0,
    visible: !1,
    domain: null,
  },
  {
    name: "RouteName",
    alias: "Route Name",
    type: "esriFieldTypeString",
    length: 1024,
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: null,
  },
  {
    name: "StartTime",
    alias: "Start Time",
    type: "esriFieldTypeDate",
    length: 36,
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "StartUTCOffset",
    alias: "Start Time: Offset from UTC in Minutes",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "TotalCosts",
    alias: "Total Costs",
    type: "esriFieldTypeString",
    length: 1048576,
    editable: !0,
    nullable: !0,
    visible: !1,
    domain: null,
  },
  {
    name: "TotalLateMinutes",
    alias: "Total Late Minutes",
    type: "esriFieldTypeDouble",
    editable: !0,
    nullable: !0,
    visible: !1,
  },
  {
    name: "TotalMeters",
    alias: "Total Meters",
    type: "esriFieldTypeDouble",
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "TotalMinutes",
    alias: "Total Minutes",
    type: "esriFieldTypeDouble",
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "TotalWaitMinutes",
    alias: "Total Wait Minutes",
    type: "esriFieldTypeDouble",
    editable: !0,
    nullable: !0,
    visible: !1,
  },
  {
    name: "Version",
    alias: "Version",
    type: "esriFieldTypeString",
    length: 16,
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: null,
  },
]),
  (l.popupInfo = {
    title: "Route Details",
    fieldInfos: [
      {
        fieldName: "RouteName",
        label: "Route Name",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "TotalMinutes",
        label: "Total Minutes",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        format: { places: 2, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "TotalMeters",
        label: "Total Meters",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        format: { places: 2, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "TotalLateMinutes",
        label: "Total Late Minutes",
        isEditable: !1,
        tooltip: "",
        visible: !1,
        format: { places: 2, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "TotalWaitMinutes",
        label: "Total Wait Minutes",
        isEditable: !1,
        tooltip: "",
        visible: !1,
        format: { places: 2, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "TotalCosts",
        label: "Total Costs",
        isEditable: !1,
        tooltip: "",
        visible: !1,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "StartTime",
        label: "Start Time",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        format: { dateFormat: "shortDateShortTime24" },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "StartUTCOffset",
        label: "Start Time: Offset from UTC in Minutes",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        format: { places: 0, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "EndTime",
        label: "End Time",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        format: { dateFormat: "shortDateShortTime24" },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "EndUTCOffset",
        label: "End Time: Offset from UTC in Minutes",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        format: { places: 0, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "Messages",
        label: "Analysis Messages",
        isEditable: !1,
        tooltip: "",
        visible: !1,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "AnalysisSettings",
        isEditable: !1,
        tooltip: "",
        visible: !1,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "Version",
        label: "Version",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        stringFieldOption: "textbox",
      },
    ],
    description: null,
    showAttachments: !1,
    mediaInfos: [],
  }),
  t([i()], l.prototype, "analysisSettings", void 0),
  t([i()], l.prototype, "endTime", void 0),
  t(
    [d("endTime", ["attributes.EndTimeUTC"])],
    l.prototype,
    "readEndTime",
    null
  ),
  t([i()], l.prototype, "endTimeOffset", void 0),
  t(
    [d("endTimeOffset", ["attributes.EndTime", "attributes.EndTimeUTC"])],
    l.prototype,
    "readEndTimeOffset",
    null
  ),
  t(
    [i({ json: { read: { source: "attributes.FirstStopID" } } })],
    l.prototype,
    "firstStopId",
    void 0
  ),
  t([i({ type: X })], l.prototype, "geometry", void 0),
  t(
    [i({ json: { read: { source: "attributes.LastStopID" } } })],
    l.prototype,
    "lastStopId",
    void 0
  ),
  t([i()], l.prototype, "messages", void 0),
  t(
    [i({ json: { read: { source: "attributes.Name" } } })],
    l.prototype,
    "name",
    void 0
  ),
  t(
    [i({ json: { read: { source: "attributes.ObjectID" } } })],
    l.prototype,
    "objectId",
    void 0
  ),
  t([i({ type: E })], l.prototype, "popupTemplate", void 0),
  t([i()], l.prototype, "startTime", void 0),
  t(
    [d("startTime", ["attributes.StartTimeUTC"])],
    l.prototype,
    "readStartTime",
    null
  ),
  t([i()], l.prototype, "startTimeOffset", void 0),
  t(
    [d("startTimeOffset", ["attributes.StartTime", "attributes.StartTimeUTC"])],
    l.prototype,
    "readStartTimeOffset",
    null
  ),
  t(
    [i({ json: { read: { source: "attributes.StopCount" } } })],
    l.prototype,
    "stopCount",
    void 0
  ),
  t([i({ types: j })], l.prototype, "symbol", void 0),
  t([i()], l.prototype, "totalCosts", void 0),
  t([d("totalCosts", ["attributes"])], l.prototype, "readTotalCosts", null),
  t([i()], l.prototype, "totalDistance", void 0),
  t([i()], l.prototype, "totalDuration", void 0),
  t([i()], l.prototype, "totalLateDuration", void 0),
  t([i()], l.prototype, "totalViolations", void 0),
  t(
    [d("totalViolations", ["attributes"])],
    l.prototype,
    "readTotalViolations",
    null
  ),
  t([i()], l.prototype, "totalWait", void 0),
  t([d("totalWait", ["attributes"])], l.prototype, "readTotalWait", null),
  t([i()], l.prototype, "totalWaitDuration", void 0),
  t([i({ readOnly: !0, json: { read: !1 } })], l.prototype, "type", void 0),
  t([i()], l.prototype, "version", void 0),
  (l = H = t([O("esri.rest.support.RouteInfo")], l));
const Ae = l;
var Y;
let s = (Y = class extends w(A) {
  constructor(e) {
    super(e),
      (this.arriveCurbApproach = null),
      (this.arriveTime = null),
      (this.arriveTimeOffset = null),
      (this.bearing = null),
      (this.bearingTol = null),
      (this.cumulativeCosts = null),
      (this.cumulativeDistance = null),
      (this.cumulativeDuration = null),
      (this.curbApproach = null),
      (this.departCurbApproach = null),
      (this.departTime = null),
      (this.departTimeOffset = null),
      (this.distanceToNetworkInMeters = null),
      (this.geometry = null),
      (this.lateDuration = null),
      (this.locationType = null),
      (this.name = null),
      (this.navLatency = null),
      (this.objectId = null),
      (this.popupTemplate = null),
      (this.posAlong = null),
      (this.routeName = null),
      (this.serviceCosts = null),
      (this.serviceDistance = null),
      (this.serviceDuration = null),
      (this.sequence = null),
      (this.sideOfEdge = null),
      (this.snapX = null),
      (this.snapY = null),
      (this.snapZ = null),
      (this.sourceId = null),
      (this.sourceOid = null),
      (this.status = null),
      (this.symbol = null),
      (this.timeWindowEnd = null),
      (this.timeWindowEndOffset = null),
      (this.timeWindowStart = null),
      (this.timeWindowStartOffset = null),
      (this.type = "stop"),
      (this.violations = null),
      (this.waitDuration = null),
      (this.wait = null);
  }
  readArriveTimeOffset(e, a) {
    return P(a.attributes.ArriveTime, a.attributes.ArriveTimeUTC);
  }
  readCumulativeCosts(e, a) {
    return S(a.attributes, "Cumul_");
  }
  readDepartTimeOffset(e, a) {
    return P(a.attributes.DepartTime, a.attributes.DepartTimeUTC);
  }
  readServiceCosts(e, a) {
    return S(a.attributes, "Attr_");
  }
  writeServiceCosts(e, a) {
    $(e, a, "Attr_");
  }
  writeTimeWindowEnd(e, a) {
    N(e) ||
      (a.attributes || (a.attributes = {}),
      (a.attributes.TimeWindowEnd = e.getTime()));
  }
  writeTimeWindowStart(e, a) {
    N(e) ||
      (a.attributes || (a.attributes = {}),
      (a.attributes.TimeWindowStart = e.getTime()));
  }
  readViolations(e, a) {
    return S(a.attributes, "Violation_");
  }
  readWait(e, a) {
    return S(a.attributes, "Wait_");
  }
  static fromGraphic(e) {
    return new Y({
      arriveCurbApproach: r(e.attributes.ArrivalCurbApproach)
        ? c.fromJSON(e.attributes.ArrivalCurbApproach)
        : null,
      arriveTime: r(e.attributes.ArrivalTime)
        ? new Date(e.attributes.ArrivalTime)
        : null,
      arriveTimeOffset: e.attributes.ArrivalUTCOffset,
      cumulativeCosts: r(e.attributes.CumulativeCosts)
        ? U(JSON.parse(e.attributes.CumulativeCosts))
        : null,
      cumulativeDistance: e.attributes.CumulativeMeters ?? null,
      cumulativeDuration: e.attributes.CumulativeMinutes ?? null,
      curbApproach: r(e.attributes.CurbApproach)
        ? c.fromJSON(e.attributes.CurbApproach)
        : null,
      departCurbApproach: r(e.attributes.DepartureCurbApproach)
        ? c.fromJSON(e.attributes.DepartureCurbApproach)
        : null,
      departTime: r(e.attributes.DepartureTime)
        ? new Date(e.attributes.DepartureTime)
        : null,
      departTimeOffset: e.attributes.DepartureUTCOffset ?? null,
      geometry: e.geometry,
      lateDuration: e.attributes.LateMinutes ?? null,
      locationType: r(e.attributes.LocationType)
        ? L.fromJSON(e.attributes.LocationType)
        : null,
      name: e.attributes.Name,
      objectId: e.attributes.ObjectID ?? e.attributes.__OBJECTID,
      popupTemplate: e.popupTemplate,
      routeName: e.attributes.RouteName,
      sequence: e.attributes.Sequence ?? null,
      serviceCosts: r(e.attributes.ServiceCosts)
        ? U(JSON.parse(e.attributes.ServiceCosts))
        : null,
      serviceDistance: e.attributes.ServiceMeters ?? null,
      serviceDuration: e.attributes.ServiceMinutes ?? null,
      status: r(e.attributes.Status) ? C.fromJSON(e.attributes.Status) : null,
      symbol: e.symbol,
      timeWindowEnd: r(e.attributes.TimeWindowEnd)
        ? new Date(e.attributes.TimeWindowEnd)
        : null,
      timeWindowEndOffset: e.attributes.TimeWindowEndUTCOffset ?? null,
      timeWindowStart: r(e.attributes.TimeWindowStart)
        ? new Date(e.attributes.TimeWindowStart)
        : null,
      timeWindowStartOffset: e.attributes.TimeWindowStartUTCOffset ?? null,
      waitDuration: e.attributes.WaitMinutes ?? null,
    });
  }
  toGraphic() {
    const e = {
      ObjectID: v(this.objectId),
      ArrivalCurbApproach: r(this.arriveCurbApproach)
        ? c.toJSON(this.arriveCurbApproach)
        : null,
      ArrivalTime: r(this.arriveTime) ? this.arriveTime.getTime() : null,
      ArrivalUTCOffset: this.arriveTimeOffset,
      CumulativeCosts: r(this.cumulativeCosts)
        ? JSON.stringify(k(this.cumulativeCosts))
        : null,
      CumulativeMeters: this.cumulativeDistance,
      CumulativeMinutes: this.cumulativeDuration,
      CurbApproach: r(this.curbApproach) ? c.toJSON(this.curbApproach) : null,
      DepartureCurbApproach: r(this.departCurbApproach)
        ? c.toJSON(this.departCurbApproach)
        : null,
      DepartureTime: r(this.departTime) ? this.departTime.getTime() : null,
      DepartureUTCOffset: this.departTimeOffset,
      LateMinutes: this.lateDuration,
      LocationType: r(this.locationType) ? L.toJSON(this.locationType) : null,
      Name: v(this.name),
      RouteName: v(this.routeName),
      Sequence: this.sequence,
      ServiceCosts: r(this.serviceCosts)
        ? JSON.stringify(k(this.serviceCosts))
        : null,
      ServiceMeters: this.serviceDistance,
      ServiceMinutes: this.serviceDuration,
      Status: r(this.status) ? C.toJSON(this.status) : null,
      TimeWindowEnd: r(this.timeWindowEnd)
        ? this.timeWindowEnd.getTime()
        : null,
      TimeWindowEndUTCOffset: this.timeWindowEndOffset ?? this.arriveTimeOffset,
      TimeWindowStart: r(this.timeWindowStart)
        ? this.timeWindowStart.getTime()
        : null,
      TimeWindowStartUTCOffset:
        this.timeWindowStartOffset ?? this.arriveTimeOffset,
      WaitMinutes: this.waitDuration,
    };
    return new x({
      geometry: this.geometry,
      attributes: e,
      symbol: this.symbol,
      popupTemplate: this.popupTemplate,
    });
  }
});
(s.fields = [
  {
    name: "ObjectID",
    alias: "ObjectID",
    type: "esriFieldTypeOID",
    editable: !1,
    nullable: !1,
    domain: null,
  },
  {
    name: "ArrivalCurbApproach",
    alias: "Arrival Curb Approach",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: {
      type: "codedValue",
      name: "esriNACurbApproachType",
      codedValues: [
        { name: "Either side", code: 0 },
        { name: "From the right", code: 1 },
        { name: "From the left", code: 2 },
        { name: "Depart in the same direction", code: 3 },
      ],
    },
  },
  {
    name: "ArrivalTime",
    alias: "Arrival Time",
    type: "esriFieldTypeDate",
    length: 36,
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "ArrivalUTCOffset",
    alias: "Arrival Time: Offset from UTC in Minutes",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "CumulativeCosts",
    alias: "Cumulative Costs",
    type: "esriFieldTypeString",
    length: 1048576,
    editable: !0,
    nullable: !0,
    visible: !1,
    domain: null,
  },
  {
    name: "CumulativeMeters",
    alias: "Cumulative Meters",
    type: "esriFieldTypeDouble",
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "CumulativeMinutes",
    alias: "Cumulative Minutes",
    type: "esriFieldTypeDouble",
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "CurbApproach",
    alias: "Curb Approach",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !1,
    domain: {
      type: "codedValue",
      name: "esriNACurbApproachType",
      codedValues: [
        { name: "Either side", code: 0 },
        { name: "From the right", code: 1 },
        { name: "From the left", code: 2 },
        { name: "Depart in the same direction", code: 3 },
      ],
    },
  },
  {
    name: "DepartureCurbApproach",
    alias: "Departure Curb Approach",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: {
      type: "codedValue",
      name: "esriNACurbApproachType",
      codedValues: [
        { name: "Either side", code: 0 },
        { name: "From the right", code: 1 },
        { name: "From the left", code: 2 },
        { name: "Depart in the same direction", code: 3 },
      ],
    },
  },
  {
    name: "DepartureTime",
    alias: "Departure Time",
    type: "esriFieldTypeDate",
    length: 36,
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "DepartureUTCOffset",
    alias: "Departure Time: Offset from UTC in Minutes",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "LateMinutes",
    alias: "Minutes Late",
    type: "esriFieldTypeDouble",
    editable: !0,
    nullable: !0,
    visible: !1,
  },
  {
    name: "LocationType",
    alias: "Location Type",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: {
      type: "codedValue",
      name: "esriNALocationType",
      codedValues: [
        { name: "Stop", code: 0 },
        { name: "Waypoint", code: 1 },
      ],
    },
  },
  {
    name: "Name",
    alias: "Name",
    type: "esriFieldTypeString",
    length: 255,
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "RouteName",
    alias: "Route Name",
    type: "esriFieldTypeString",
    length: 255,
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "Sequence",
    alias: "Sequence",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "ServiceCosts",
    alias: "Service Costs",
    type: "esriFieldTypeString",
    length: 1048576,
    editable: !0,
    nullable: !0,
    visible: !1,
    domain: null,
  },
  {
    name: "ServiceMeters",
    alias: "Service Meters",
    type: "esriFieldTypeDouble",
    editable: !0,
    nullable: !0,
    visible: !1,
  },
  {
    name: "ServiceMinutes",
    alias: "Service Minutes",
    type: "esriFieldTypeDouble",
    editable: !0,
    nullable: !0,
    visible: !1,
  },
  {
    name: "Status",
    alias: "Status",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !0,
    domain: {
      type: "codedValue",
      name: "esriNAObjectStatus",
      codedValues: [
        { name: "OK", code: 0 },
        { name: "Not Located on Network", code: 1 },
        { name: "Network Unbuilt", code: 2 },
        { name: "Prohibited Street", code: 3 },
        { name: "Invalid Field Values", code: 4 },
        { name: "Cannot Reach", code: 5 },
        { name: "Time Window Violation", code: 6 },
      ],
    },
  },
  {
    name: "TimeWindowEnd",
    alias: "Time Window End",
    type: "esriFieldTypeDate",
    length: 36,
    editable: !0,
    nullable: !0,
    visible: !1,
  },
  {
    name: "TimeWindowEndUTCOffset",
    alias: "Time Window End: Offset from UTC in Minutes",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "TimeWindowStart",
    alias: "Time Window Start",
    type: "esriFieldTypeDate",
    length: 36,
    editable: !0,
    nullable: !0,
    visible: !1,
  },
  {
    name: "TimeWindowStartUTCOffset",
    alias: "Time Window Start: Offset from UTC in Minutes",
    type: "esriFieldTypeInteger",
    editable: !0,
    nullable: !0,
    visible: !0,
  },
  {
    name: "WaitMinutes",
    alias: "Minutes Early",
    type: "esriFieldTypeDouble",
    editable: !0,
    nullable: !0,
    visible: !1,
  },
]),
  (s.popupInfo = {
    title: "{Name}",
    fieldInfos: [
      {
        fieldName: "Name",
        label: "Name",
        isEditable: !0,
        tooltip: "",
        visible: !0,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "RouteName",
        label: "Route Name",
        isEditable: !0,
        tooltip: "",
        visible: !0,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "Sequence",
        label: "Sequence",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        format: { places: 0, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "ArrivalTime",
        label: "Arrival Time",
        isEditable: !0,
        tooltip: "",
        visible: !0,
        format: { dateFormat: "shortDateShortTime24" },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "ArrivalUTCOffset",
        label: "Arrival Time: Offset from UTC in Minutes",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        format: { places: 0, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "DepartureTime",
        label: "Departure Time",
        isEditable: !0,
        tooltip: "",
        visible: !0,
        format: { dateFormat: "shortDateShortTime24" },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "DepartureUTCOffset",
        label: "Departure Time: Offset from UTC in Minutes",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        format: { places: 0, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "CurbApproach",
        label: "Curb Approach",
        isEditable: !0,
        tooltip: "",
        visible: !1,
        format: { places: 0, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "ArrivalCurbApproach",
        label: "Arrival Curb Approach",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        format: { places: 0, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "DepartureCurbApproach",
        label: "Departure Curb Approach",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        format: { places: 0, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "Status",
        label: "Status",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        format: { places: 0, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "LocationType",
        label: "Location Type",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        format: { places: 0, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "TimeWindowStart",
        label: "Time Window Start",
        isEditable: !0,
        tooltip: "",
        visible: !1,
        format: { dateFormat: "shortDateShortTime24" },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "TimeWindowStartUTCOffset",
        label: "Time Window Start: Offset from UTC in Minutes",
        isEditable: !1,
        tooltip: "",
        visible: !1,
        format: { places: 0, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "TimeWindowEnd",
        label: "Time Window End",
        isEditable: !0,
        tooltip: "",
        visible: !1,
        format: { dateFormat: "shortDateShortTime24" },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "TimeWindowEndUTCOffset",
        label: "Time Window End: Offset from UTC in Minutes",
        isEditable: !1,
        tooltip: "",
        visible: !1,
        format: { places: 0, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "ServiceMinutes",
        label: "Service Minutes",
        isEditable: !0,
        tooltip: "",
        visible: !1,
        format: { places: 2, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "ServiceMeters",
        label: "Service Meters",
        isEditable: !0,
        tooltip: "",
        visible: !1,
        format: { places: 2, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "ServiceCosts",
        label: "Service Costs",
        isEditable: !0,
        tooltip: "",
        visible: !1,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "CumulativeMinutes",
        label: "Cumulative Minutes",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        format: { places: 2, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "CumulativeMeters",
        label: "Cumulative Meters",
        isEditable: !1,
        tooltip: "",
        visible: !0,
        format: { places: 2, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "CumulativeCosts",
        label: "Cumulative Costs",
        isEditable: !0,
        tooltip: "",
        visible: !1,
        stringFieldOption: "textbox",
      },
      {
        fieldName: "LateMinutes",
        label: "Minutes Late",
        isEditable: !1,
        tooltip: "",
        visible: !1,
        format: { places: 2, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
      {
        fieldName: "WaitMinutes",
        label: "Minutes Early",
        isEditable: !1,
        tooltip: "",
        visible: !1,
        format: { places: 2, digitSeparator: !0 },
        stringFieldOption: "textbox",
      },
    ],
    description: null,
    showAttachments: !1,
    mediaInfos: [],
  }),
  t(
    [
      i({
        type: c.apiValues,
        json: {
          read: { source: "attributes.ArrivalCurbApproach", reader: c.read },
        },
      }),
    ],
    s.prototype,
    "arriveCurbApproach",
    void 0
  ),
  t(
    [i({ type: Date, json: { read: { source: "attributes.ArriveTimeUTC" } } })],
    s.prototype,
    "arriveTime",
    void 0
  ),
  t([i()], s.prototype, "arriveTimeOffset", void 0),
  t(
    [
      d("arriveTimeOffset", [
        "attributes.ArriveTime",
        "attributes.ArriveTimeUTC",
      ]),
    ],
    s.prototype,
    "readArriveTimeOffset",
    null
  ),
  t(
    [i({ json: { name: "attributes.Bearing", read: !1, write: !0 } })],
    s.prototype,
    "bearing",
    void 0
  ),
  t(
    [i({ json: { name: "attributes.BearingTol", read: !1, write: !0 } })],
    s.prototype,
    "bearingTol",
    void 0
  ),
  t([i()], s.prototype, "cumulativeCosts", void 0),
  t(
    [d("cumulativeCosts", ["attributes"])],
    s.prototype,
    "readCumulativeCosts",
    null
  ),
  t([i()], s.prototype, "cumulativeDistance", void 0),
  t([i()], s.prototype, "cumulativeDuration", void 0),
  t(
    [
      i({
        type: c.apiValues,
        json: {
          name: "attributes.CurbApproach",
          read: { reader: c.read },
          write: { writer: c.write },
        },
      }),
    ],
    s.prototype,
    "curbApproach",
    void 0
  ),
  t(
    [
      i({
        type: c.apiValues,
        json: {
          read: { source: "attributes.DepartCurbApproach", reader: c.read },
        },
      }),
    ],
    s.prototype,
    "departCurbApproach",
    void 0
  ),
  t(
    [i({ type: Date, json: { read: { source: "attributes.DepartTimeUTC" } } })],
    s.prototype,
    "departTime",
    void 0
  ),
  t([i()], s.prototype, "departTimeOffset", void 0),
  t(
    [
      d("departTimeOffset", [
        "attributes.DepartTime",
        "attributes.DepartTimeUTC",
      ]),
    ],
    s.prototype,
    "readDepartTimeOffset",
    null
  ),
  t(
    [i({ json: { read: { source: "attributes.DistanceToNetworkInMeters" } } })],
    s.prototype,
    "distanceToNetworkInMeters",
    void 0
  ),
  t([i({ type: Z, json: { write: !0 } })], s.prototype, "geometry", void 0),
  t([i()], s.prototype, "lateDuration", void 0),
  t(
    [
      i({
        type: L.apiValues,
        json: {
          name: "attributes.LocationType",
          read: { reader: L.read },
          write: { writer: L.write },
        },
      }),
    ],
    s.prototype,
    "locationType",
    void 0
  ),
  t([i({ json: { name: "attributes.Name" } })], s.prototype, "name", void 0),
  t(
    [i({ json: { name: "attributes.NavLatency", read: !1, write: !0 } })],
    s.prototype,
    "navLatency",
    void 0
  ),
  t(
    [i({ json: { name: "attributes.ObjectID" } })],
    s.prototype,
    "objectId",
    void 0
  ),
  t([i({ type: E })], s.prototype, "popupTemplate", void 0),
  t(
    [i({ json: { read: { source: "attributes.PosAlong" } } })],
    s.prototype,
    "posAlong",
    void 0
  ),
  t(
    [i({ json: { name: "attributes.RouteName" } })],
    s.prototype,
    "routeName",
    void 0
  ),
  t([i()], s.prototype, "serviceCosts", void 0),
  t([d("serviceCosts", ["attributes"])], s.prototype, "readServiceCosts", null),
  t([F("serviceCosts")], s.prototype, "writeServiceCosts", null),
  t([i()], s.prototype, "serviceDistance", void 0),
  t([i()], s.prototype, "serviceDuration", void 0),
  t(
    [i({ json: { name: "attributes.Sequence" } })],
    s.prototype,
    "sequence",
    void 0
  ),
  t(
    [
      i({
        type: B.apiValues,
        json: { read: { source: "attributes.SideOfEdge", reader: B.read } },
      }),
    ],
    s.prototype,
    "sideOfEdge",
    void 0
  ),
  t(
    [i({ json: { read: { source: "attributes.SnapX" } } })],
    s.prototype,
    "snapX",
    void 0
  ),
  t(
    [i({ json: { read: { source: "attributes.SnapY" } } })],
    s.prototype,
    "snapY",
    void 0
  ),
  t(
    [i({ json: { read: { source: "attributes.SnapZ" } } })],
    s.prototype,
    "snapZ",
    void 0
  ),
  t(
    [i({ json: { read: { source: "attributes.SourceID" } } })],
    s.prototype,
    "sourceId",
    void 0
  ),
  t(
    [i({ json: { read: { source: "attributes.SourceOID" } } })],
    s.prototype,
    "sourceOid",
    void 0
  ),
  t(
    [
      i({
        type: C.apiValues,
        json: { read: { source: "attributes.Status", reader: C.read } },
      }),
    ],
    s.prototype,
    "status",
    void 0
  ),
  t([i({ types: j })], s.prototype, "symbol", void 0),
  t(
    [i({ type: Date, json: { name: "attributes.TimeWindowEnd" } })],
    s.prototype,
    "timeWindowEnd",
    void 0
  ),
  t([F("timeWindowEnd")], s.prototype, "writeTimeWindowEnd", null),
  t([i()], s.prototype, "timeWindowEndOffset", void 0),
  t(
    [i({ type: Date, json: { name: "attributes.TimeWindowStart" } })],
    s.prototype,
    "timeWindowStart",
    void 0
  ),
  t([F("timeWindowStart")], s.prototype, "writeTimeWindowStart", null),
  t([i()], s.prototype, "timeWindowStartOffset", void 0),
  t([i({ readOnly: !0, json: { read: !1 } })], s.prototype, "type", void 0),
  t([i()], s.prototype, "violations", void 0),
  t([d("violations", ["attributes"])], s.prototype, "readViolations", null),
  t([i()], s.prototype, "waitDuration", void 0),
  t([i()], s.prototype, "wait", void 0),
  t([d("wait", ["attributes"])], s.prototype, "readWait", null),
  (s = Y = t([O("esri.rest.support.Stop")], s));
const De = s;
export {
  oe as A,
  De as D,
  Se as O,
  Te as R,
  ce as S,
  I as U,
  Ae as a,
  he as b,
  ve as c,
  P as d,
  Q as e,
  Oe as f,
  Ne as g,
  fe as h,
  de as i,
  te as j,
  be as k,
  ie as l,
  le as m,
  ge as n,
  me as o,
  pe as r,
  ue as s,
  ye as w,
  se as y,
};
