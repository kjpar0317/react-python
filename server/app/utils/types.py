from collections.abc import Iterable, Mapping
from collections import UserString
from inspect import isclass
from io import IOBase
from os import PathLike
from typing import Any, TypeVar

try:
    from types import UnionType
except ImportError:    # Python < 3.10
    UnionType = ()
from typing import Union

try:
    from typing import TypedDict
except ImportError:    # Python < 3.8
    typeddict_types = ()
else:
    typeddict_types = (type(TypedDict('Dummy', {})),)
    
try:
    from typing_extensions import TypedDict as ExtTypedDict
except ImportError:
    pass
else:
    typeddict_types += (type(ExtTypedDict('Dummy', {})),)

TRUE_STRINGS = {'TRUE', 'YES', 'ON', '1'}
FALSE_STRINGS = {'FALSE', 'NO', 'OFF', '0', 'NONE', ''}

def is_integer(item):
    return isinstance(item, int)


def is_number(item):
    return isinstance(item, (int, float))


def is_bytes(item):
    return isinstance(item, (bytes, bytearray))


def is_string(item):
    return isinstance(item, str)


def is_pathlike(item):
    return isinstance(item, PathLike)


def is_list_like(item):
    if isinstance(item, (str, bytes, bytearray, UserString, IOBase)):
        return False
    return isinstance(item, Iterable)


def is_dict_like(item):
    return isinstance(item, Mapping)


def is_union(item, allow_tuple=False):
    return (isinstance(item, UnionType)
            or getattr(item, '__origin__', None) is Union
            or (allow_tuple and isinstance(item, tuple)))

def type_repr(typ):
    """Return string representation for types.

    Aims to look as much as the source code as possible. For example, 'List[Any]'
    instead of 'typing.List[typing.Any]'.
    """
    if typ is type(None):
        return 'None'
    if typ is Any:  # Needed with Python 3.6, with newer `Any._name` exists.
        return 'Any'
    if is_union(typ):
        return ' | '.join(type_repr(a) for a in typ.__args__)
    name = _get_type_name(typ)
    if _has_args(typ):
        args = ', '.join(type_repr(a) for a in typ.__args__)
        return f'{name}[{args}]'
    return name


def _get_type_name(typ):
    for attr in '__name__', '_name':
        name = getattr(typ, attr, None)
        if name:
            return name
    return str(typ)


def _has_args(typ):
    args = getattr(typ, '__args__', ())
    # TypeVar check needed due to Python 3.6 having such thing in `__args__`
    # even if using just `List`.
    return args and not isinstance(typ.__args__[0], TypeVar)


def is_truthy(item):
    """Returns `True` or `False` depending on is the item considered true or not.

    Validation rules:

    - If the value is a string, it is considered false if it is `'FALSE'`,
      `'NO'`, `'OFF'`, `'0'`, `'NONE'` or `''`, case-insensitively.
    - Other strings are considered true.
    - Other values are handled by using the standard `bool()` function.

    Designed to be used also by external test libraries that want to handle
    Boolean values similarly as Robot Framework itself. See also
    :func:`is_falsy`.
    """
    if is_string(item):
        return item.upper() not in FALSE_STRINGS
    return bool(item)


def is_falsy(item):
    """Opposite of :func:`is_truthy`."""
    return not is_truthy(item)
